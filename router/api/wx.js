// 中间件
import oauth from '../../controllers/oauth';
export default (router) => {
  // 微信第三方
  router.get('/api/wxUserCode', async (...arg) => {
    console.log(1)
    oauth.getCode(...arg);
  });
  router.get('/api/wxUserInfo', async (ctx, next) => {
    let data = await oauth.getUserInfo(ctx, next);
    ctx.body = JSON.stringify(data);
  })
}