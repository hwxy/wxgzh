import axios from '../core/network';
import { base, mpBase } from  '../config';


let config = {
  createQrcodeApi:`${base}/cgi-bin/qrcode/create`,
  getQrcodeApi:`${mpBase}/cgi-bin/showqrcode`
}

class Qrcode{
  constructor(option){
    this.createQrcodeUrl = `${config.createQrcodeApi}?access_token=${option.token}`;
    this.getQrcodeUrl = `${config.getQrcodeApi}`;
  }
  async createQrcode(body){
    let data = await axios.post(this.createQrcodeUrl, body);
    return data;
  }

  async getQrcode(option){
    let data = await axios.get(`${this.getQrcodeUrl}?ticket=${encodeURI(option.ticket)}`);
    return data;
  }
}

export default async (option) => {
  let qrcode = new Qrcode(option);
  let data = await qrcode.createQrcode({
    "expire_seconds": 604800, 
    "action_name": "QR_SCENE", 
    "action_info": {
      "scene": {
        "scene_id": 123
      }
  }});
  let getQrcode = await qrcode.getQrcode(data);
  return 'qrcode';
};