const express = require ('express');
const mongoose = require('mongoose');
const Pet = require('../models/pet-model');
const User = require('../models/user-model');
const router = express.Router();
const  parser = require('../config/cloudinary')

router.post("/pet",parser.single('picture'), (req,res,next)=>{
      let imgPath=req.file.url
  console.log('**************************************************')
  console.log('imgPath---->',req.body)
  console.log('imgPath---->',req.file)
      const {
        weight,species,vet, sex,name,lastName,age,breed,
        color,birth,image,date_cut,signs_part,tatto,chip,UserID
      } = req.body;
      
      const  pet = new Pet({
        weight,species,vet, sex,name,lastName,age,breed,
        color,birth,image,date_cut,signs_part,tatto,chip,imgPath,UserID
      })
    pet.save()
      .then((response)=>{
        res.json(response)
        console.log('================================')
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

router.put("/pet/:id", (req,res,next)=>{
  
  console.log('++++++++++++++++++++++++++++++++')
 
  console.log('body---->',req.body)
  console.log('param---->',req.param.id)
 
  Pet.findByIdAndUpdate(req.params.id,req.body)
    .then((response)=>{
      console.log('*****************************')
      res.json(response)
     
   
    })
    .catch((err)=>{
      console.log('errorPet',err)
    })
})

router.get("/pet/:id",(req,res,next)=>{
  console.log('req.params.id',req.params.id)
  Pet.findById(req.params.id)
    .then((response)=>{
      // console.log('datafindid',response)
      res.json(response);
      
    })
    .catch((err)=>{
      console.log('err fin did pet',err)
    })
})

router.get("/pet/patients/:vet",(req,res,next)=>{
  console.log('**********-*************')
  let vet = (req.params.vet);
  console.log('----------',vet)
  Pet.find({'vet':vet})
    .then((result)=>{
      console.log('entro al chid0',result)
      res.json(result)
    })
    .catch((error)=>{
      console.log('error de  pacientes',error)
    })
})

module.exports=router;