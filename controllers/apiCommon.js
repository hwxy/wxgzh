import Config from '../config';
export default async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", `${Config.domain}`);
  ctx.set("Access-Control-Allow-Methods", "Get,Post,Put,Delete");
  ctx.set("Access-Control-Allow-Headers", "x-csrf-token");
  await next()
} 