const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name:String,
  apaterno:String,
  amaterno:String,
  email:{
    type: String,
    // unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  pet:{
    type: Schema.Types.ObjectId,
    ref: "Pet"
  },
  cellphone:String,
  street:String,
  no_street:String,
  zipcode:String,
  state:String,
  city:String,
  community:String,
  cedula:String,
  studies:String,
  photoName:String,
  photoPath:String,
  imgName: String,
  imgPath: String,
  role: {
    type: String,
    enum: ['vet', 'user'],
    default: 'user'
  },
 
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model('User',userSchema)
module.exports=User;