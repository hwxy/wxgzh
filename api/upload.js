import axios from '../core/network';
import fs from 'fs';
import path from 'path';
import { base } from  '../config';
const FormData = require('form-data');

let config = {
  api:`${base}/cgi-bin/media/upload`
}

class Upload{
  constructor(option){
    this.url = `${config.api}?access_token=${option.token}&type=image`;
    this.uploadFile();
  }

  async readerFile(){
    let imgPath = path.resolve(__dirname, '../img/20190825172321.jpg');
    const file = fs.createReadStream(imgPath);
    const form = new FormData();
    form.append('media', file);
    return form;
  }

  async uploadFile(){
    let formData = await this.readerFile();
    let data = await axios.post(this.url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return data;
  }
}

export default async (option) => {
  let upload = new Upload(option);
  let data = await upload.uploadFile();
  return data;
};