// 引入node加密模块进行sha1加密
import crypto from 'crypto';
import config from  '../config';

import GetRawBody from 'raw-body';

import util from '../core/util'
// import reply from '../controllers/reply';

export default async (ctx, next) => {
  const { accessToken } = ctx.state;
  const { signature, timestamp, nonce, echostr } = ctx.query 
  const token = config.token
  let hash = crypto.createHash('sha1')
  const arr = [token, timestamp, nonce].sort()
  hash.update(arr.join(''))
  const shasum = hash.digest('hex')
  let isWxValid = shasum === signature;
  ctx.state.isWxValid = isWxValid;
  if(isWxValid){
    return ctx.body = echostr
  }else{
    ctx.status = 401
    ctx.body = 'Invalid signature'
  }

  if(ctx.method == 'POST' && isWxValid){
   const data = await GetRawBody(ctx.req, {
     length: ctx.length,
     limit: '1mb',
     encoding: ctx.charset
   })
   const content = await util.parseXML(data);
   const message = await util.formatMessage(content.xml);

   ctx.state.message = message;

  //  console.log(data, content, message, 'message');

   ctx.status = 200;
   ctx.type = 'application/xml';

  // const replayBody = await reply(ctx);

  const replayBody = await util.tpl(ctx, accessToken);
   ctx.body = replayBody;
   return;
  }

  ctx.status = 401   
  ctx.body = 'Invalid signature'
  await next();  
};