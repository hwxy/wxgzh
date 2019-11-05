import signature from '../api/signature';

export default async (ctx, next) => {
  let { accessToken } = ctx.state;
  let data = await signature(accessToken, ctx.href);
  ctx.state.signature = data; 
  await next()       
}