var express = require('express');
var router = express.Router();
var multer  = require('multer');
const Course = require("../models/course");
var homework = require("../models/homework");



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/homeworks');
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

      
      cb(null, 'homework-' + Date.now() + '.' + filetype);
      
    }
});


var upload = multer({storage: storage});



//Upload Homework to Course
router.post('/:id',upload.single('file'), async function(req, res, next) {
    if(!req.file ) {
        return res.status(500).send({ message: 'Upload fail'});
    } 
    
    else {
      
        
       const homework_file = new homework({
        name:  req.file.filename,
        course: req.params.id,
        

      })
      
      await homework_file.save()
      
        
          return res.send({ message: 'Upload success'});
          console.log(req.file. mimetype)
        
        
    }
});











module.exports = router;