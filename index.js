// 路由
import router from './router';
// 中间件
import viewMiddleware from './middleware/view';
import bodyMiddleware from './middleware/body';
import csrfMiddleware from './middleware/csrf';
import sessionMiddleware from './middleware/session';
import { staticServerNoCache } from './middleware/static';
import { staticProxy } from './middleware/proxy';
import { historyApiFallback } from "koa2-connect-history-api-fallback";
// 配置
import config from  './config';
// 数据库
import { connect, initSchemas} from './app/database/init';
// 环境
import env from './env'

(async () => {
  // 连接数据库
  await connect(config.db);
  initSchemas(); 
  const Koa = require('koa')
  const app = new Koa()

  app.keys = ['session key', 'csrf example'];
  // view
  // 加载模板引擎
  app.use(viewMiddleware)
  //静态资源
  app.use(staticServerNoCache)
  // 处理请求数据
  app.use(bodyMiddleware)
  // session
  app.use(sessionMiddleware(app));
  // csrf
  app.use(csrfMiddleware)
  // router
  app.use(router.init());
  if(env != 'prod'){
    // proxy
    app.use(staticProxy);
  }
  // 单页面处理
  app.use(
    historyApiFallback({
      rewrites: [{
        from: /\/spa(\/*)?/, 
        to: '/spa'
      }]
    })
  );
  app.listen(config.port, ()=>{
    console.log(config.port)
  })
})()
