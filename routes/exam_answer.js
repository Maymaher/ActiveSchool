var express = require('express');
var router = express.Router();
const examAnswerModel = require("../models/exam_answer");

const passport = require('passport');


//GET all students exams
router.get('/', (req, res) => {
    console.log('list all exams')
    examAnswerModel.find({},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list class") 
      
      }).populate("student").populate("exam")
  })



//student upload exam answer and get student data from auth

router.post('/',passport.authenticate('jwt', { session : false}), (req, res) => {

   
  const   answer=req.body.answer;
  const   exam=req.body.exam;


  console.log(req.body) ///
  const userData = req.body
  const userInstance = new  examAnswerModel ({

    answer,
    exam
   

  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })

 

})

//Delete individual Exam Answer
router.delete("/:id", async (req, res) => {
	try {
		await examAnswerModel.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Exam Answer doesn't exist!" })
	}
})


module.exports = router;
