// schema
// model
// entity
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let TokenSchema = new Schema({
  name: String,
  token: String,
  expires_in: Number,
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



// 保存的前置钩子
TokenSchema.pre('save', function(next){
  if(this.isNew){
    this.meta.createdAt = this.meta.updatedAt = Date.now();
  }else{
    this.meta.updatedAt = Date.now();
  }
  next();
})

TokenSchema.statics = {
  async getAccessToken(){
    let token = await this.findOne();
    return token || {};
  },
  async saveAccessToken(data){
    let token = await this.findOne();
    if(token && token.token) {
      await this.updateOne({
        '_id': token._id
      },{
        $set: { 
          token: data.access_token || data.token,
          expires_in: data.expires_in
        }
      });
    }else{
      token = new Token({
        name: 'access_token',    
        token: data.access_token || data.token,
        expires_in: data.expires_in
      })
      await token.save();
    }

    return token;
  }
}

let Token = mongoose.model('Token', TokenSchema);



