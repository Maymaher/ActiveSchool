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

////update student grade


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
