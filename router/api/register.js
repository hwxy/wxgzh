// controllers   
import apiCommon from '../../controllers/apiCommon';
// user
import mongoose from 'mongoose';
// lodash
import _isObject from 'lodash/isObject'

export default (router) => {
  router.post('/api/register', apiCommon,  async (ctx) => {
    const User = mongoose.model('User');
    let data = ctx.request.body;
    if(_isObject(data) && data.hasOwnProperty('phone') && data.hasOwnProperty('password')){
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