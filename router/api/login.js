// controllers
import apiCommon from '../../controllers/apiCommon';
// middleware
import { csrfExamples } from '../../middleware/csrf';
// mongoose
import mongoose from 'mongoose'
// lodash
import _isObject from 'lodash/isObject'

export default (router) => {
  router.post('/api/login', apiCommon,  async (ctx) => {
    const User = mongoose.model('User');
    let data = ctx.request.body;
    if(_isObject(data) && data.hasOwnProperty('phone') && data.hasOwnProperty('password')){
      let { status, message } = await User.login(data)
      if(status != 2) return ({
        status,
        message
      })
      ctx.session.secret = csrfExamples.tokens.secretSync();
      let token = csrfExamples.tokens.create(ctx.session.secret);
      ctx.body = {
        token,    
        status,
        message
      };
    }else{
      ctx.status = 400;
      ctx.body = {
        errorMessage: "缺少参数"   
      };
    }
  });
}