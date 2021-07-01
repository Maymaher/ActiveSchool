var express = require('express');
var router = express.Router();
var multer  = require('multer');
var Gallery = require('../models/exam');
const Course = require("../models/course");
var ExamAnswer = require("../models/exam_answer");
var fs = require('fs');
var uploadFile=false;
// var storage = multer.diskStorage({
//     destination: async (req, file, cb) => {
//       cb(null, './public/exams');
//     },
//     filename: async (req, file, cb) => {
//       console.log(file);
//       var filetype = '';
      
//       var exam = await Gallery.findOne({ _id: req.params.id })
      
//       if(exam.to >= Date()){
        

//         if(file.mimetype === 'image/gif') {
//             filetype = 'gif';
//           }
//           if(file.mimetype === 'image/png') {
//             filetype = 'png';
//           }
//           if(file.mimetype === 'image/jpeg') {
//             filetype = 'jpg';
//           }
//           if(file.mimetype === 'application/pdf') {
//             filetype = 'pdf';
//           }
//           if(file.mimetype === 'image/svg') {
//             filetype = 'svg';
//           }
    
//           if(file.mimetype === 'application/msword') {
//             filetype = 'doc';
//           }
//           if(file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//             filetype = 'docx';
//           }
    
    
          
//           cb(null, 'exam-' + Date.now() + '.' + filetype);
         

//       }
      
     
      
//     }
// });


// var upload = multer({storage: storage});



// //Upload Exam Answer
// router.post('/:id',upload.single('file'), async function(req, res, next) {
   
// });

var storage = multer.diskStorage({
  destination: async(req, file, cb) => {
    cb(null, './public/examsAnswers');
  },
  filename: async(req, file, cb) => {
    console.log(file);
    var filetype = '';
    
    var exam = await Gallery.findOne({ _id: req.params.id })
    
    if(exam.to >= new Date()){
      console.log(exam)
      
    if(file.mimetype === 'image/gif') {
      filetype = 'gif';
    }
    if(file.mimetype === 'image/png') {
      filetype = 'png';
    }
    if(file.mimetype === 'image/jpeg') {
      filetype = 'jpg';
    }
    if(file.mimetype === 'application/pdf') {
      filetype = 'pdf';
    }
    if(file.mimetype === 'image/svg') {
      filetype = 'svg';
    }

    if(file.mimetype === 'application/msword') {
      filetype = 'doc';
    }
    if(file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      filetype = 'docx';
    }

    var filename_answer='answer-' + Date.now() + '.' + filetype;
    cb(null, filename_answer);
    const answer = new ExamAnswer({
      exam: exam._id,
      answer: filename_answer,
      student: req.params.studentId 
    })
    await answer.save()
    res.send(answer)
 
    
  }
  
    
  }
});


var upload = multer({storage: storage});



//Upload Exam
router.post('/:id/:studentId' ,upload.single('file'), async function(req, res, next) {
  if(!req.file ) {
      return res.status(500).send({ message: 'Upload fail'});
  } 
 
  
 });






module.exports = router;