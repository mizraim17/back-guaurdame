const express = require ('express');
const mongoose = require("mongoose");

const File = require("../models/files-model")
const router = express.Router();
const  parser = require('../config/cloudinary')


router.post("/file", (req, res, next) => {
  const {
    history_med,    anamnesis,
    MM	,	FC	,	TLLC	,	RD	, RT	,	FR	, Mucosas	,	Temperature	,
    PP	,	Pulso	,	PA	,	EM	, CC	,	Linfonodos	, lab_QS,lab_HG,
    lab_U,lab_Rx , lab_dxp
  } =req.body;
  const file = new File({
    history_med,    anamnesis,
    MM	,	FC	,	TLLC	,	RD	, RT	,	FR	, Mucosas	,	Temperature	,
    PP	,	Pulso	,	PA	,	EM	, CC	,	Linfonodos	, lab_QS,lab_HG,
    lab_U,lab_Rx , lab_dxp
  
     });
  
  file.save()
    .then(response => {
      // console.log('response.data',res.json(response.data))
      res.json(response)
    })
    .catch(err => next(err));
  
});


module.exports=router;