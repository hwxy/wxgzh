import axios from '../core/network';
import { base, mpBase } from  '../config';


let config = {
  api:`${base}/cgi-bin/shorturl`,
}

class Duan{
  constructor(option){
    this.createDuanUrl = `${config.api}?access_token=${option.token}`;
  }
  async createDuan(body){
    let data = await axios.post(this.createDuanUrl, body);
    return data;
  }
}

export default async (option) => {
  let duan = new Duan(option);
  let data = await duan.createDuan({
    action: 'long2short', 
    long_url: 'https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQFE8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyM0kycGtURVdldmwxRHNxZzF0MWwAAgRcIIddAwSAOgkA'
  });
  return data;
};