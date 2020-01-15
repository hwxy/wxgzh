import { getJsBundlesByEntry } from '../util/webpackEntry';

export default async (ctx, next) => {
  ctx.state.js = getJsBundlesByEntry("main");
  await next()       
}               