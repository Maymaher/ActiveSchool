var express = require('express');
var router = express.Router();
const userModel = require("../models/user");
const schedual_couseModel = require("../models/courses_schedual");
const schedualModel = require("../models/schedual");
const parentModel = require("../models/parent");
const passport = require('passport');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
 

//get schedual
router.get('/schedual',passport.authenticate('jwt', { session : false}),  (req, res) => {
    console.log('list schedual')
    schedual_couseModel.find({},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list schedual") 
      
      })
  
  })

 

//get all days
  router.get('/days',passport.authenticate('jwt', { session : false}),  (req, res) => {
    console.log('list days')
    schedualModel.find({},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list days") 
      
      })
  
  })
  //add days on schedual
router.post('/schedual', passport.authenticate('jwt', { session : false}), (req, res) => {
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

router.post('/courses ',passport.authenticate('jwt', { session : false}),  (req, res) => {
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
router.post('/',passport.authenticate('jwt', { session : false}),  (req, res) => {
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
  

  // res.send(req.body);

  // res.send('user created')

})
    //get All student
    router.get('/student',(req, res) => {
        console.log('list student')
        userModel.find({type:"student"},(err,data)=>{
          if(!err) return res.json(data) 
          res.send("erro cannot list student") 
          
          })
      
      })


  //add courses on schedual

  router.post('/courses ', passport.authenticate('jwt', { session : false}), (req, res) => {
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


 
 
 
 //add student-parent info
router.post('/parent', passport.authenticate('jwt', { session : false}), (req, res) => {
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    const  type="parent";
    const address=req.body.address;
    const phone= req.body.phone;
    const student=req.body.student;
    console.log(req.body) ///
    const userData = req.body
    const userInstance = new parentModel({
  
      name,
      email,
      password,
      type,
      phone,
      address,
      student,
  
  
    })
    console.log(userInstance);
    
  
  
    userInstance.save((err,userDoc)=>{
        if(!err) return res.json(userDoc)
        console.log(err);
        res.send("error occured while saving")
    })
 
  // res.send(req.body);

  // res.send('user created')

})

//get student parent info
router.get('/parent/:id', passport.authenticate('jwt', { session : false}), (req, res) => {
    console.log('list parent')
    parentModel.find({student:req.params.id},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list parent") 
      
      })
  
  })


//delete user

router.delete("/:id", async (req, res) => {
	try {
		
		await userModel.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "user doesn't exist!" })
	}
})


//Update user data
router.patch("/:id", async (req, res) => {
	try {
		const user = await userModel.findOne({ _id: req.params.id })

		if (req.body.name) {
			user.name = req.body.name
		}

		if (req.body.email) {
		   user.email = req.body.email
		}

		if (req.body.password) {
			user.password = req.body.password
		 }

     if (req.body.address) {
			user.address = req.body.address
		 }

     if (req.body.avatar) {
			user.avatar = req.body.avatar
		 }
     if (req.body.class) {
			user.class = req.body.class
		 }
     if (req.body.level) {
			user.level = req.body.level
		 }


		await user.save()
		res.send(user)
	} catch {
		res.status(404)
		res.send({ error: "user doesn't exist!" })
	}
})

  

      //get student with id  authontication
// router.get('/student', (req, res) => {
//     console.log('list student')
//     userModel.find({_id},(err,data)=>{
//       if(!err) return res.json(data) 
//       res.send("erro cannot list student") 
      
//       })
  
//   })
module.exports = router;
