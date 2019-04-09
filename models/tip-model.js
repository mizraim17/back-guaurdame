const mongoose  = require ('mongoose');
const Schema    = mongoose.Schema;

const tipSchema = new Schema({
  title:String,
  tip:String,
  topic:String,
  color:String
  
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Tips = mongoose.model('Tips',tipSchema)
module.exports=Tips;