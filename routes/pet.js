const express = require ('express');
const mongoose = require('mongoose');
const Pet = require('../models/pet-model');
const User = require('../models/user-model')
const router = express.Router();

router.post("/pet",(req,res,next)=>{
      const { UserID,
        weight,species, sex,name,lastName,age,breed,
        color,birth,image,date_cut,signs_part,tatto,chip
      } = req.body;
      
      const  pet = new Pet({
        weight,species, sex,name,lastName,age,breed,
        color,birth,image,date_cut,signs_part,tatto,chip
      })
    pet.save()
      .then((response)=>{
        res.json(response)
        console.log('response._id',response._id)
        console.log('req.body.UserID',req.body.UserID)
        User.findByIdAndUpdate(req.body.UserID,{
          $push:{pet:response._id}
        })
          .then((theResponse) => {
            res.json(theResponse);
          })
          .catch((err)=>{
            res.json('err-',err)
          })
      })
      .catch((err)=>{
        console.log('errorPet',err)
      })
  })

router.get("/pet/:id",(req,res,next)=>{
  console.log('req.params.id',req.params.id)
  Pet.findById(req.params.id)
    .then((response)=>{
      console.log('datafindid',response)
      res.json(response);
      
    })
    .catch((err)=>{
      console.log('err fin did pet',err)
    })
})

module.exports=router;