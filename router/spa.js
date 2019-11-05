import wxSignature from '../controllers/wxSignature';
import Token  from '../controllers/accessToken'
import config from '../config';

import spaEntry  from '../controllers/spaEntry'

export default (router) => {
  router.get('/spa', spaEntry, Token,  wxSignature, async (ctx) => {
    let { signature, js } = ctx.state;
    
    let wxConfig = {
      appId: config.appID,
      ...signature           
    }
    
    await ctx.render('business/spa', {
      config: JSON.stringify(wxConfig),
      js: js
    });
  });
}