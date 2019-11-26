// controllers   
import apiCommon from '../../controllers/apiCommon';
// middleware
import { csrfExamples } from '../../middleware/csrf';
// user
import mongoose from 'mongoose';

export default (router) => {
  router.post('/api/register', apiCommon,  async (ctx) => {
    const User = mongoose.model('User');
    let data = ctx.request.body;
    if(data && data instanceof Object && data.hasOwnProperty('phone') && data.hasOwnProperty('password')){
      let message = await User.register(data); 
      ctx.status = 200;
      ctx.body = message;
    }else{
      ctx.status = 400;
      ctx.body = {
        errorMessage: "缺少参数"   
      };
    }
  });
}