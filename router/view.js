import wxSignature from '../controllers/wxSignature';
import Token  from '../controllers/accessToken'
import config from '../config';
export default (router) => {
  router.get('/view', Token, wxSignature, async (ctx) => {
    let { signature } = ctx.state;
    
    let wxConfig = {
      appId: config.appID,
      ...signature           
    }
    
    await ctx.render('business/view', {
      config: JSON.stringify(wxConfig)
    });
  });
}