import axios from '../core/network';
import globalConfig, { base } from  '../config';


let config = {
  api:`${base}/semantic/semproxy/search`,
}

class Yuyi{
  constructor(option){
    this.url = `${config.api}?access_token=${option.token}`;
  }
  async createYuyi(body){

    let data = await axios.post(this.url, body);
    return data;
  }
}

export default async (option, FromUserName) => {
  let yuyi = new Yuyi(option);
  let data = await yuyi.createYuyi({
    "query":"查一下明天从北京到上海的南航机票",
    "city":"北京",
    "category": "flight,hotel",
    "appid": globalConfig.appID,
    "uid": FromUserName
    });
  return data;
};