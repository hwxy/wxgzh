// controllers
import apiCommon from '../../controllers/apiCommon';
// middleware
import { csrfExamples } from '../../middleware/csrf';

export default (router) => {
  router.post('/api/login', apiCommon,  async (ctx) => {
    ctx.session.secret = csrfExamples.tokens.secretSync();
    let token = csrfExamples.tokens.create(ctx.session.secret);
    ctx.body = {
      token,
      message: "登录成功"   
    };
  });
}