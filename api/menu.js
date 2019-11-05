import axios from '../core/network';
import { base, mpBase } from  '../config';


let config = {
  createApi:`${base}/cgi-bin/menu/create`,
  delApi: `${base}/cgi-bin/menu/delete`,
}
class Menu{
  constructor(option){
    this.createApiUrl = `${config.createApi}?access_token=${option.token}`;
    this.delApiUrl = `${config.delApi}?access_token=${option.token}`;
  }
  async createMenu(body){
    let data = await axios.post(this.createApiUrl, body);
    return data;
  }

  async deleteMenu(){
    let data = await axios.get(this.delApiUrl);
    return data;
  }
}

export default async (option) => {
  let menu = new Menu(option);
  await menu.deleteMenu()
  let data = await menu.createMenu({
    "button":[
    {
      "name": '功能一',
      "sub_button": [
        {	
          "type": "scancode_waitmsg", 
          "name": "扫码带提示", 
          "key": "rselfmenu_0_0", 
        },
        {
          "type": "scancode_push", 
          "name": "扫码推事件", 
          "key": "rselfmenu_0_1", 
        },
      //   {
      //     "type": "view_limited", 
      //     "name": "图文消息", 
      //     "media_id": "MEDIA_ID2"
      //  }
      ]
    },
    {
      "name":"功能二",
      "sub_button":[
        {
          "type": "pic_sysphoto", 
          "name": "系统拍照发图", 
          "key": "rselfmenu_1_0", 
       }, 
        {
            "type": "pic_photo_or_album", 
            "name": "拍照或者相册发图", 
            "key": "rselfmenu_1_1", 
        }, 
        {
          "type": "pic_weixin", 
          "name": "微信相册发图", 
          "key": "rselfmenu_1_2", 
        }]
      },
       {
        "name":"功能三",
        "sub_button":[
          {
            "name": "发送位置", 
            "type": "location_select", 
            "key": "rselfmenu_2_0"
        }]
      //   {
      //     "type": "media_id", 
      //     "name": "图片", 
      //     "media_id": "MEDIA_ID1"
      //  }
      }]
  });
  return data;
};