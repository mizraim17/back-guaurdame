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
  image:String,
  date_cut:Date,
  signs_part:String,
  tatto:String,
  chip:String
  
});


const  Pet = mongoose.model('Pet',petSchema);
module.exports= Pet;