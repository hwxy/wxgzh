import view from 'koa-views';
import path from 'path';

const viewMiddleware = view(path.join(__dirname, '../view/html'), {
  map: {
      html: 'ejs'  //可以把ejs文件改成html
  }
})   
      
export default viewMiddleware;