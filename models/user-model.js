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
  // timestamps: {
  //   createdAt: 'created_at',
  //     updatedAt: 'updated_at'
  // },
  role: {
    type: String,
    enum: ['vet', 'user'],
    default: 'user'
  },
  // profile_pic: {
  //   type: String,
  //   default: 'https://res.cloudinary.com/dj3hdzs7e/image/upload/v1543784645/avatar.png'
  // },
})

const User = mongoose.model('User',userSchema)
module.exports=User;