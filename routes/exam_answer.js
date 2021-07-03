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

//get answers of specific exam
  router.get('/:id', (req, res) => {
    console.log('list all exams')
    examAnswerModel.find({exam:req.params.id},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list class") 
      
      }).populate("student").populate("exam")
  })




//student upload exam answer and get student data from auth

router.post('/', (req, res) => {

   
  const   answer=req.body.answer;
  const   exam=req.body.exam;
 const student=req.body.student;
const date=req.body.date;
const grade =req.body.grade;


  console.log(req.body) ///
  const userData = req.body
  const userInstance = new  examAnswerModel ({

    answer,
    exam,
    student,
    date,
    grade

   

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

router.patch("/studenGrade/:stud_id/:exam_id", async (req, res) => {
	try {
    console.log();
		const user = await examAnswerModel.findOne({ student: req.params.stud_id,exam:req.params.exam_id })

		
     if (req.body) {
       console.log(req.body.grade);
			user.grade = req.body.grade;
      

		 }

     
		await user.save()
		res.send({user,success:true})
	} catch {
		res.status(404)
		res.send({ error: "user doesn't exist!",success:false })
	}
})

module.exports = router;
