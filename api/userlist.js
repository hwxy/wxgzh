import axios from '../core/network';
import { base } from  '../config';
let config = {
  api:`${base}/cgi-bin/user/get`
}

class UserList{
  constructor(option){
    this.url = `${config.api}?access_token=${option.token}`;

  }
  async getUserList(){
    let data = await axios.get(this.url);
    // console.log(data, this.url , 'userList');
    return data;
  }
}

export default async (option) => {
  let userList = new UserList(option);
  let data = await userList.getUserList();
  return data;
};