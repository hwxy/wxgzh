// 路由
import router from './router';
import viewMiddleware from './middleware/view';
import { staticProxy } from './middleware/proxy';

import config from  './config';
import { connect, initSchemas} from './app/database/init';

import { historyApiFallback } from "koa2-connect-history-api-fallback";

// import Token from './controllers/accessToken';
(async () => {
  // 连接数据库
  await connect(config.db);
  initSchemas();
   
  // token
  // let Token = require('./controllers/accessToken').default;
  // let accessToken = await token();
      
  const Koa = require('koa')
  const app = new Koa()
  // view
  // 加载模板引擎
  app.use(viewMiddleware)
  // proxy
  app.use(staticProxy);
  app.use(
    historyApiFallback({
      rewrites: [{
        from: /\/spa(\/*)?/, 
        to: '/spa'
      }]
    })
  );
  app.use(router.init());
  // history处理


  app.listen(config.port, ()=>{
    console.log(config.port)
  })
})()
