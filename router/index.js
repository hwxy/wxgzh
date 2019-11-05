import Router from 'koa-router';
// 页面
import wx from './wx';
import view from './view';
import spa from './spa';

const router = new Router();

class RouterManage {  
  init(){    
    this.load();
    return router.routes();
  }
  load(){
    wx(router);
    view(router);
    spa(router);
  }
}

export default new RouterManage();