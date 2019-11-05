import xml2js from 'xml2js';
import template from './template';

const parseXML = async (xml) => {
  return new Promise((res, rej)=>{
    xml2js.parseString(xml, {
      trim: true
    }, (err, content) => {
      if(err) rej(err);
      else res(content)
    })
  })
}

const formatMessage = async (result) => {
  let message = {};
  if(typeof result == 'object'){
    const keys = Object.keys(result);
    for(let i = 0; i< keys.length; i++){
      let item = result[keys[i]];
      let key = keys[i];
      if(!(Array.isArray(item)) || item.length == 0){
        continue
      }
      if(item.length === 1){
        let val = item[0];
        if(typeof val == 'object'){
          message[key] = formatMessage(val);
        }else{
          message[key] = (val || '');
        }
      }else{
        message[key] = [];
        for(let j = 0; j< keys.length; j++){
          message[key].push(formatMessage[item[j]]);
        }
      }
    }
  }
  return message;
}

const tpl = async (ctx, accessToken) => {
  let { message } = ctx.state;
  let xml = await template(message, accessToken);
  return xml;
}

export default {
  parseXML,
  formatMessage,
  tpl
}