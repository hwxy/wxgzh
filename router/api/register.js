// controllers   
import apiCommon from '../../controllers/apiCommon';
// middleware
import { csrfExamples } from '../../middleware/csrf';
// user
import mongoose from 'mongoose';

export default (router) => {
  router.post('/api/register', apiCommon,  async (ctx) => {
    const User = mongoose.model('User');
    
    ctx.body = {
      message: "注册成功"   
    };
  });
}