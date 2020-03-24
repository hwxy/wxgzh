// env
import Env from '../env';

export const base = 'https://api.weixin.qq.com';
export const mpBase = 'https://mp.weixin.qq.com';
// config
const configs = {
  local: {
    db: 'mongodb://localhost:27017/test',
    port: 4000,
    appID: 'wxd04bb4652f8757c4', //公众号里面取
    AppSecret: '7efdfdb2c2c2f274f68dad0732c81cda', //公众号里面取
    token: 'ab38f22e60ebb0a911d461', //自定义的token
    domain: '*' 
  },
  prod: {
    port: 4000,
    db: 'mongodb://47.101.32.46:27017/test',
    // appID: 'wxc9c4208724f2031b', //公众号里面取
    // AppSecret: 'be6d630aa38ffb92d12a17238ac01676', //公众号里面取
    // token: 'ab38f22e60ebb0a911d461', //自定义的token
    appID: 'wxd04bb4652f8757c4', //公众号里面取
    AppSecret: '7efdfdb2c2c2f274f68dad0732c81cda', //公众号里面取
    token: 'ab38f22e60ebb0a911d461', //自定义的token
    domain: '*' 
  }
}


export default configs[Env]