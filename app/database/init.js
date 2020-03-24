import mongoose from 'mongoose';
import glob from 'glob';
import { resolve } from 'path';

mongoose.Promise = global.Promise;

export const initSchemas = () => {
  glob.sync(resolve(__dirname, './schema', '**/*.js')).forEach((res)=>{
    require(res);
  });
}    

export const connect = (db) => {
  let maxConnectTimes = 0;
  return new Promise((resolve, reject) => {

    if(process.env.NODE_ENV != 'production'){
      mongoose.set('debug', true);  
    }

    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    mongoose.connection.on('disconnect', () => {
      maxConnectTimes++;
      if(maxConnectTimes < 5){  
        mongoose.connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
      }else{
        throw new Error('数据库挂了');
      }
    })

    mongoose.connection.on('error', (error) => {
      maxConnectTimes++;
      if(maxConnectTimes < 5){
        mongoose.connect(db);
      }else{
        throw new Error('数据库挂了');
      }
    })
    
    mongoose.connection.on('open', () => {
      resolve();
      console.log('db connected');
    })

  })
}