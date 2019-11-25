import Router from 'koa-router';
import glob from 'glob';
import { resolve } from 'path';
// 页面
import wx from './wx';
import view from './view';
import spa from './spa';

export const initApi = (router) => {
  glob.sync(resolve(__dirname, './api', '**/*.js')).forEach((res)=>{
    let apiFunc = require(res).default;
    apiFunc(router);
  });
}

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
    initApi(router)
  }
}

export default new RouterManage();