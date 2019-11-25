// schema
// model
// entity
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

let userSchema = new Schema({
  // user admin
  role: {
    default: "user",
    type: String
  },
  name: String,
  password: String,
  hash_word: String,
  // 兼容各个微信应用，小程序或者公众号的微信用户 Id
  openId: [String],
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
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, result) => {
    if(err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) return next(error);
      user.password = hash;
      next();
    })
  })
  next();
})

userSchema.methods = {
  register: () => {

  },
  comparePassword: function(_password, password){
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, function(err, isMatch) {
        if(!err) resolve(isMatch);
        else reject(err);
      })
    })
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
  }
}      

let User = mongoose.model('User', userSchema);

export default User;



