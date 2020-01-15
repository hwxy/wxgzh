
import axios from '../core/network';
import { base } from  '../config';
import crypto from 'crypto';
import mongoose from 'mongoose';

let config = {
  api:`${base}/cgi-bin/ticket/getticket`
}



class Signature{ 
  constructor(token, url){
    this.nowUrl = url;
    this.apiUrl = `${config.api}?access_token=${token.token}&type=jsapi`;
    this.Ticket = mongoose.model('Ticket');

  }

  async updateJsapiTicket(){
    let data = await axios.get(this.apiUrl);
    const now = Date.now();
    const expiresIn = now + (data.expires_in - 20) * 1000;
    data.expires_in = expiresIn;
    return data;
  }
 
  isValidToken(data){
    const now = Date.now();
    if((data.expires_in && data.expires_in > now) && data.ticket) return true;
    return false;
  }

  
  async getJsapiTicket(){
    let data = await this.Ticket.getTicket();
    return data;
  }

  async saveJsapiTicket(data){
    this.Ticket.saveTicket(data)
  }

  async fetchJsapiTicket(){
    // 获取数据库里面的ticket
    let data = await this.getJsapiTicket()
    if(!this.isValidToken(data)){
      data = await this.updateJsapiTicket();
    }
    // db 保存
    await this.saveJsapiTicket(data)

    return data;
  }

  getSha(str){
    var sha1 = crypto.createHash("sha1"); //定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
    sha1.update(str);
    var res = sha1.digest("hex"); //加密后的值d
    return res;
  }


  async getSignature(){
    let { ticket } = await this.fetchJsapiTicket();
    let nonceStr = Math.random()
        .toString(36)
        .substr(2); // 随机字符串
    let timestamp = Date.now(); // 获取时间戳，数值类型
    let jsapi_ticket = `jsapi_ticket=${ticket}&noncestr=${nonceStr}&timestamp=${timestamp}&url=${this.nowUrl}`;

    let signature = this.getSha(jsapi_ticket);
    return {
      nonceStr,
      timestamp,
      signature
    };
  }
}

export default async (token, url) => {
  let signature = new Signature(token, url);
  let data = await signature.getSignature();
  return data;
};