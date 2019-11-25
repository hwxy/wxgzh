import body from 'koa-body';

const bodyMiddleware = body({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
})   

export default bodyMiddleware;