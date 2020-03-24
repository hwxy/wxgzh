import axios from '../core/network';
import globalConfig from  '../config';

let config = {
  getCodeApi:"https://open.weixin.qq.com/connect/oauth2/authorize",
  getAccessTokenApi: "https://api.weixin.qq.com/sns/oauth2/access_token",
  getUserInfoApi: "https://api.weixin.qq.com/sns/userinfo"
}
 
class Oauth{
  async getCode(ctx){
    let option = {
      appid: globalConfig.appID,
      redirect_uri: 'https://2c2df443.ngrok.io/wxUserInfo',
      response_type: 'code',
      scope: 'snsapi_userinfo',
      state: `${ctx.query.id}#wechat_redirect`
    }
    let url = `${config.getCodeApi}?appid=${option.appid}&redirect_uri=${encodeURI(option.redirect_uri)}&response_type=${option.response_type}&scope=${option.scope}&state=${option.state}`;
    ctx.redirect(url);
      
  }

  async getAccessToken(code){
    let option = {
      appid: globalConfig.appID,
      secret: globalConfig.AppSecret,
      code: code
    }
    let url = `${config.getAccessTokenApi}?appid=${option.appid}&secret=${option.secret}&code=${option.code}&grant_type=authorization_code`;
    
    let data = await axios.get(url)
      
    return data;
  }

  async getUserInfo(ctx, next){
    let code = ctx.query.code || ''; 
    let dataToken = await this.getAccessToken(code)
    let access_token = dataToken.access_token;
    let openid = dataToken.openid;
    let url = `${config.getUserInfoApi}?access_token=${access_token}&openid=${openid}&lang=zh_CN`;
    let data = await axios.get(url)
    return data;
  }    
}

export default ((option) => {
  let oauth = new Oauth(option);  
  return oauth;
})();