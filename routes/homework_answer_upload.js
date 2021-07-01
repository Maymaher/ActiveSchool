var express = require('express');
var router = express.Router();
var multer  = require('multer');
const Course = require("../models/course");
var homework = require("../models/homework");
var homeworkAnswer = require("../models/homework_answer");



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/homeworkAnswers');
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

      
      cb(null, 'homeworkAnswer-' + Date.now() + '.' + filetype);
      
    }
});


var upload = multer({storage: storage});



//Upload Homework Answer to Homework
router.post('/:id',upload.single('file'), async function(req, res, next) {
    if(!req.file ) {
        return res.status(500).send({ message: 'Upload fail'});
    } 
    
    else {
      
        
       const homework_answer_file = new homeworkAnswer({
        answer:  req.file.filename,
        homework: req.params.id,
        student: req.body.student
        

      })
      
      await homework_answer_file.save()
      
        
          return res.send({ message: 'Upload success'});
          console.log(req.file. mimetype)
        
        
    }
});











module.exports = router;