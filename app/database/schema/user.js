// schema
// model
// entity
import mongoose from 'mongoose';
import _ from 'lodash';

const Schema = mongoose.Schema;

let userSchema = new Schema({
  // user admin
  role: {
    default: "user",
    type: String
  },
  name: String,
  phone: String,
  password: String,
  hash_word: String,
  // 兼容各个微信应用，小程序或者公众号的微信用户 Id
  openId: String,
  unionId: String,
  loginAttempts: {
    type: Number,
    required: true,
    default: 0
  },
  lockUntil: Number,
  meta: {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    }     
  }
});
// 加密权重
const SALT_WORK_FACTOR = 10;
// 登录的最大失败尝试次数
const MAX_LOGIN_ATTEMPTS = 5;
// 锁定密码时间
const LOCK_TIME = 2 * 60 * 60 * 1000;

// 虚拟字段
userSchema.virtual('isLocked').get(function(){
  return !!(this.lockUntil && this.lockUntil > Date.now());
})

// 保存的前置钩子
userSchema.pre('save', function(next){
  if(this.isNew){
    this.meta.createdAt = this.meta.updatedAt = Date.now();
  }else{
    this.meta.updatedAt = Date.now();
  }
  next();
})

userSchema.pre('save', function(next){
  // isModified 检查是否修改过
  if(!this.isModified('password')) return next();
  // bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
  //   if(err){
  //     return next(err);
  //   } 
  //   bcrypt.hash(this.password, salt, (err, hash) => {
  //     if(err) return next(error);
  //     this.hash_word = hash;
  //     next();
  //   })
  // })
})

userSchema.statics = {
  comparePassword: function(_password, password){
    // return new Promise((resolve, reject) => {
    //   bcrypt.compare(_password, password, function(err, isMatch) {
    //     if(!err) resolve(isMatch);
    //     else reject(err);
    //   })
    // })
  },
  incLoginAttempts(user){
    const that = this;
    return new Promise((resolve, reject) => {
      if(that.lockUntil && that.lockUntil < Date.now()){
        this.update({
          $set: {
            loginAttempts: 1
          },
          $unset: {
            lockUntil: 1
          }
        }, function(err){
          if(!err) resolve(true);
          else reject(err);
        })
      }else{
        let updates = {
          $inc: {
            loginAttempts: 1
          }
        }

        if(that.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS || !that.isLocked){
          updates.$set = {
            locakUntil: Date.now() + LOCK_TIME
          }
        }

        that.update(updates, err => {
          if(!err) resolve(true)
          else reject(err)
        })
      }
    })
  },
  async register({ phone, password }){
    let data = await this.find({ phone });
    if(!_.isEmpty(data)) {
      return {
        message: "已注册",   
        status: 1
      }
    }
    await User.create({ phone, password })
    return {
      message: "注册成功",
      status: 2
    }
  },
  async login({ phone, password }){
    let data = await this.findOne({ phone });
    if(!_.isEmpty(data)) {      
      if(password === data.password){
        return {
          message: "登录成功",  
          status: 2
        }
      }else{
        return {
          message: "密码错误",
          status: 1
        }
      }
    }else{
      return {
        message: "账号错误",
        status: 0
      }
    }
  },   
}

let User = mongoose.model('User', userSchema);

export default User;



