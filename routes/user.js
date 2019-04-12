const express = require ('express');
const mongoose = require("mongoose");
const User = require("../models/user-model");
const router = express.Router();
const  parser = require('../config/cloudinary')

router.post("/user", (req, res, next) => {
  const {
    name,apaterno,amaterno, password, email,cellphone,street,
    no_street,zipcode,state,city,role,community, cedula,studies,photoName,imgPath} = req.body;

  const user = new User({
    name,apaterno,amaterno, password, email,cellphone,street
    ,no_street,zipcode,state,city,role,community,cedula,studies,photoName,imgPath
  });

  user.save()
    .then(response => {
      // console.log('response.data',res.json(response.data))
     res.json(response)
    })
    .catch(err => next(err));
  
  });

router.get("/user",(req,res,next)=>{
  // console.log('**********-*************')
  User.find({'role':'vet'})
    .then((result)=>{
       console.log('entro al chid0')
      res.json(result)
    })
    .catch(err => next(err));
  })

router.post('/user/login', (req,res,next)=> {
  console.log('------------')
 
  let {user,password} = req.body;
  console.log('user**********',user)
  User.findOne({'email':user})
    .then((response)=>{
      console.log('response-pass',response.password)
      console.log('req.params.password',password)
      if(password===response.password)
      {
        console.log('======',res)
        res.status(200).json(response);
        console.log('si pacho')
      }
      
      else{
        console.log('esta mal')
        res.status(500).json(response)
      }
    })
    .catch((err)=>{
      console.log('no existe usuario---------')
      res.status(500).json(err)
    })
});


router.get('/user/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ message: "El id no existe" });
      return;
    }
  
  User.findById(req.params.id)
      .populate("pet")
      .then(response => {
        console.log('populate de pet ')
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.put("/user/:id",parser.single('picture'), (req,res,next)=>{
  let imgPath=req.file.url;
  
  console.log('++++++++++++++++++++++++++++++++')
  console.log('body---->',req.body)
  console.log('param---->',req.param)
  console.log('imgPath---->', imgPath)
 
  User.findByIdAndUpdate(req.params.id,{"imgPath":imgPath})
    .then((response)=>{
      console.log('*****************************')
      res.json(response)
      
      
    })
    .catch((err)=>{
      console.log('errorPet',err)
    })
})


router.get('/user/vet/:id', (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "El id no existe" });
    return;
  }
  
  User.findById(req.params.id)
    .populate("vet")
    .then(response => {
      // console.log('---vet---',response)
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    });
});



module.exports=router;