const express   = require ('express');
const mongoose  = require ('mongoose');
const Tips       = require ('../models/tip-model');
const router    = express.Router();

router.post('/tips',(req,res,next)=> {
  const {
    title,tip,topic,color
  } = req.body;
  
  const tips = new Tips({
    title,tip,topic,color
  })
  
  tips.save()
    .then((response)=>{
      res.json(response)
    })
    .catch((err)=>{
      console.log(err)
    })
});

router.get('/tips', (req,res,next)=> {
  Tips.find()
  .then((response)=>{
    console.log('pppppppppp')
      res.json(response)
    })
    
    .catch((err)=>{
      console.log(err)
    })
})


module.exports = router;