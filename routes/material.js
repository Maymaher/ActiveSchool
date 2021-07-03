var express = require('express');
var router = express.Router();
const materialModel = require("../models/material");
const materialFileModel = require("../models/material_files");
const courseLevelModel = require("../models/course_level");
const passport = require('passport');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//GET all matrials for specific level 
// router.get('/:id', (req, res) => {
//     console.log('list all exams')
//     courseLevelModel.find({course:req.params.id},(err,data)=>{
//       // materialModel.find({courseLevel:})
//       if(!err) return res.json(data) 
//       res.send("erro cannot list class") 
      
//       }).populate("teacher").populate("course").populate("level")
  
//   })



//teacher add new material data

router.post('/', passport.authenticate('jwt', { session : false}), (req, res) => {
   
  const   courseLevel=req.body.courseLevel;
  const   teacher=req.body.teacher;
 


  console.log(req.body) ///
  const userData = req.body
  const userInstance = new  materialModel({

    courseLevel,
    teacher


  })

  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })

 

})


//upload material file

router.post('/matrialFile',  passport.authenticate('jwt', { session : false}),(req, res) => {
   
  const   material=req.body.material;
  const   materialFile=req.body.materialFile;
 


  console.log(req.body) ///
  const userData = req.body
  const userInstance = new  materialFileModel ({

    material,
    materialFile


  })

  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })

 

})

//Get All material
router.get("/material", async (req, res) => {
	const materials = await materialModel.find().populate("course").populate("teacher")
	res.send(materials)
	
}) 


//Get All material files
router.get("/materialFiles", async (req, res) => {
	const materialFiles = await materialFileModel.find().populate("material")
	res.send(materialFiles)
	
}) 


//Get meterial by course id

router.get('/material/:id', (req, res) => {
  console.log('list level material ')
  materialModel.find({course:req.params.id},(err,data)=>{
    if(!err) return res.json(data) 
    res.send("erro cannot list level material") 
    
    })

})

//Get meterialfiles by material id

router.get('/materialfiles/:id', (req, res) => {
  console.log('list level materialfiles ')
  materialFileModel.find({material:req.params.id},(err,data)=>{
    if(!err) return res.json(data) 
    res.send("erro cannot list level materialfiles") 
    
    })

})


module.exports = router;
