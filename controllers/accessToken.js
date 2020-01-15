
import config from  '../config';
import axios from '../core/network';
import mongoose from 'mongoose';
  
         
export class WxToken{
  constructor(opts) {
    this.opts = opts;
    this.url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${opts.appID}&secret=${opts.appSecret}`;
    this.getAccessToken = opts.getAccessToken;
    this.saveAccessToken = opts.saveAccessToken;
  }

  async request(){
    try{
      let data = await axios.get(this.url);
      return data;
    }catch(e){   
      return {};
    }    
  }
      
  async fetchAccessToken(){
    // 获取数据库里面的token
    let data = await this.getAccessToken()
    if(!this.isValidToken(data)){
      data = await this.updateAccessToken();
    }
    // db 保存
    await this.saveAccessToken(data)
    return data;
  }

  async updateAccessToken(){
    let data = await this.request();
    const now = Date.now();
    const expiresIn = now + (data.expires_in - 20) * 1000;
    data.expires_in = expiresIn;
    data.token = data.access_token;
    return data;
  }
 
  isValidToken(data){
    const now = Date.now();
    if((data.expires_in && data.expires_in > now) && data.token) return true;
    return false;
  }

}

export default async (ctx, next) => {
  const Token = mongoose.model('Token');
  let wxToken = new WxToken({  
    appID: config.appID,     
    appSecret: config.AppSecret,
    getAccessToken: async () => {
      const res = await Token.getAccessToken();
      return res;
    },
    saveAccessToken: async (data) => {       
      await Token.saveAccessToken(data);    
      return data;
    }
  });
  let data = await wxToken.fetchAccessToken();
  ctx.state.accessToken = data;
  await next()
} 