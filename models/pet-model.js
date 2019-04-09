const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const User = require('../models/user-model')

const petSchema = new Schema({
  weight:Number,
  species:String,
  sex:String,
  name:String,
  lastName:String,
  age:Number,
  breed:String,
  color:String,
  birth:Date,
  vet:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  image:String,
  date_cut:Date,
  signs_part:String,
  tatto:String,
  chip:String
  
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const  Pet = mongoose.model('Pet',petSchema);
module.exports= Pet;