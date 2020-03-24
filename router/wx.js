// 中间件
import wxValid from '../middleware/wxValid';
import oauth from '../controllers/oauth';
import Token from '../controllers/accessToken'

export default (router) => {
  router.get('/', async (ctx) => {
    ctx.redirect('/spa')
  });
  // 验证是get     
  router.get('/wxOfficialAccounts', Token, wxValid);
  // 微信公众号发过来的是post method       
  router.post('/wxOfficialAccounts', Token, wxValid);
  // 微信第三方
  router.get('/wxUserCode', async (...arg) => {
    oauth.getCode(...arg);
  });
  router.get('/wxUserInfo', async (ctx, next) => {
    let data = await oauth.getUserInfo(ctx, next);
    ctx.body = JSON.stringify(data);
  })        
}