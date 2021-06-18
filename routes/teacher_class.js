var express=require('express');
var router=express.Router();
var teacherClass=require("../models/teacher_class");

// var user=require("../models/user");
var classes=require("../models/class");

// var teacherClass=require("../models/teacher_class");


router.get('/',async (req, res)=> {
  const teachers= await teacherClass.find().populate("tclass").populate("teacher");
  res.send(teachers);
});


router.post('/',async (req, res)=> {
  const tclass=req.body.tclass;  
  const teacher=req.body.teacher;  

  const userInstance = new teacherClass({

    tclass,
    teacher
  });

  userInstance.save((err,userDoc)=>{
    if(!err) return res.json(userDoc)
    console.log(err);
    res.send("error occured while saving")
})
});
  
  module.exports = router;
  