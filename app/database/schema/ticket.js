// schema
// model
// entity
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let TicketSchema = new Schema({
  name: String,
  ticket: String,
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
TicketSchema.pre('save', function(next){
  if(this.isNew){
    this.meta.createdAt = this.meta.updatedAt = Date.now();
  }else{
    this.meta.updatedAt = Date.now();
  }
  next();
})

TicketSchema.statics = {  
  async getTicket(){
    let data = await this.findOne();
    return data || {};
  },
  async saveTicket(data){
    let ticket = await this.findOne();
    if(ticket && ticket.ticket) {
      await this.updateOne({
        '_id': ticket._id
      },{
        $set: { 
          ticket: data.ticket,
          expires_in: data.expires_in
        }
      });
    }else{
      ticket = new Ticket({
        name: 'ticket',    
        ticket: data.ticket,
        expires_in: data.expires_in
      })
      await ticket.save();
    }

    return ticket;
  }
}

let Ticket = mongoose.model('Ticket', TicketSchema);



