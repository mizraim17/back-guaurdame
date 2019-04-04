const express = require ('express');
const mongoose = require("mongoose");
const User = require("../models/user-model");
const router = express.Router();

router.post("/user", (req, res, next) => {
  const {
    name,apaterno,amaterno, password, email,cellphone,street,
    no_street,zipcode,state,city,role,community} = req.body;

  const user = new User({
    name,apaterno,amaterno, password, email,cellphone,street
    ,no_street,zipcode,state,city,role,community
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
  User.find()
    .then((result)=>{
      // console.log('entro al chid0',result)
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
      
    })
    .catch((err)=>{
      console.log(err)
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
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports=router;