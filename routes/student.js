var express = require('express');
var router = express.Router();
const userModel = require("../models/user");
const schedual_couseModel = require("../models/courses_schedual");
const schedualModel = require("../models/schedual");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
 

//get schedual
router.get('/schedual', (req, res) => {
    console.log('list schedual')
    schedual_couseModel.find({},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list schedual") 
      
      })
  
  })

 

//get all days
  router.get('/days', (req, res) => {
    console.log('list days')
    schedualModel.find({},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list days") 
      
      })
  
  })
  //add days on schedual
router.post('/schedual', (req, res) => {
  const day=req.body.day;
  console.log(req.body) ///
  const userData = req.body
  const userInstance = new schedualModel({

 day


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
  

  //add courses on schedual

router.post('/courses ', (req, res) => {
    const courses=req.body.courses;
    const day=req.body.day;
    console.log(req.body) ///
    const userData = req.body
    const userInstance = new schedual_couseModel({
  courses,
   day
  
  
    })
    console.log(userInstance);
    
  
  
    userInstance.save((err,userDoc)=>{
        if(!err) return res.json(userDoc)
        console.log(err);
        res.send("error occured while saving")
    })
})

//add student info
router.post('/', (req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const avatar=req.body.avatar;
    const  type="student";
    const address=req.body.address;
    const level= req.body.level;
    const classs=req.body.classs;
    console.log(req.body) ///
    const userData = req.body
    const userInstance = new userModel({
  
      name,
      email,
      password,
      avatar,
      type,
      address,
      level,
      classs,
  
  
    })
    console.log(userInstance);
    
  
  
    userInstance.save((err,userDoc)=>{
        if(!err) return res.json(userDoc)
        console.log(err);
        res.send("error occured while saving")
    })
  
    //get All student
router.get('/student', (req, res) => {
    console.log('list student')
    userModel.find({},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list student") 
      
      })
  
  })

      //get student with id  authontication
// router.get('/student', (req, res) => {
//     console.log('list student')
//     userModel.find({_id},(err,data)=>{
//       if(!err) return res.json(data) 
//       res.send("erro cannot list student") 
      
//       })
  
//   })


  
  // res.send(req.body);

  // res.send('user created')

})

module.exports = router;
