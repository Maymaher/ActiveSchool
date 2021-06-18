var express = require('express');
var router = express.Router();
const examAnswerModel = require("../models/exam_answer");



//GET all students exams
router.get('/', (req, res) => {
    console.log('list all exams')
    examAnswerModel.find({},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list class") 
      
      }).populate("student").populate("exam")
  })



//student upload exam answer and get student data from auth

router.post('/', (req, res) => {

   
  const   answer=req.body.answer;


  console.log(req.body) ///
  const userData = req.body
  const userInstance = new  examAnswerModel ({

    answer,
   

  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })

 

})



module.exports = router;
