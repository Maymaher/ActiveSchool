var express = require('express');
var router = express.Router();
var multer  = require('multer');
const Course = require("../models/course");
var material = require("../models/material");
var materialFile = require("../models/material_files");



var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/materials');
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

      
      cb(null, 'material-' + Date.now() + '.' + filetype);
      
    }
});


var upload = multer({storage: storage});



//Upload Material to Course
router.post('/:id',upload.single('file'), async function(req, res, next) {
    if(!req.file ) {
        return res.status(500).send({ message: 'Upload fail'});
    } 
    
    else {
      
        
       const material_file = new material({
        teacher:  req.body.teacher,
        course: req.params.id,
        

      })

      const material_file_upload = new materialFile({
        materialFile:  req.file.filename,
        material: material_file._id,
        

      })

      
      await material_file.save();
      await material_file_upload.save();
      
        
          return res.send({ message: 'Upload success'});
          console.log(req.file. mimetype)
        
        
    }
});











module.exports = router;