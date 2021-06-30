var express = require('express');
var router = express.Router();
var multer  = require('multer');
var Gallery = require('../models/exam');
const Course = require("../models/course");
var ExamAnswer = require("../models/exam_answer");
var fs = require('fs');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/exams');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
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

      
      cb(null, 'exam-' + Date.now() + '.' + filetype);
      
    }
});


var upload = multer({storage: storage});



//Upload Exam
router.post('/',upload.single('file'), async function(req, res, next) {
    if(!req.file ) {
        return res.status(500).send({ message: 'Upload fail'});
    } 
    
    else {
      
        const course_level = await Course.findOne({ _id: req.body.course});
       req.body.examFile = 'http://localhost:3200/public/exams/' + req.file.filename;
       const exam = new Gallery({
        examFile:  req.file.filename,
        course: req.body.course,
        from: req.body.from,
        to:req.body.to,
        teacher:req.body.teacher,
        date:req.body.date,
        level: course_level.level

      })
      
      await exam.save()
      
        
          return res.send({ message: 'Upload success'});
          console.log(req.file. mimetype)
        
        
    }
});




//Get individual Course
router.get("/",async (req, res) => {
  
  var filePath = './public/exams/exam-1624808330787.pdf'; 
  
  fs.unlink(filePath, function(err) {
    if(err && err.code == 'ENOENT') {
        // file doens't exist
        console.info("File doesn't exist, won't remove it.");
    } else if (err) {
        // other errors, e.g. maybe we don't have enough permission
        console.error("Error occurred while trying to remove file");
    } else {
        console.info(`removed`);
    }
});

})

module.exports = router;