var express = require('express');
var router = express.Router();
const userModel = require("../models/user");
const SchedularSturday = require("../models/schedular-Sturday");
const SchedularSunday = require("../models/schedular-sunday");
const SchedularMonday = require("../models/schedular-monday");
const SchedularTusday = require("../models/schedular-tusday");
const SchedularWensday = require("../models/schedular-wensday");
const SchedularThrisday = require("../models/schedular-thrisday");
const schedual_couseModel = require("../models/schedular-wensday");
const Attendence = require("../models/attendence");

const schedualModel = require("../models/schedual");
const parentModel = require("../models/parent");
const passport = require('passport');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
 

//get schedual
router.get('/schedual/:id', (req, res) => {
    console.log('list schedual')
    schedualModel.find({class:req.params.id},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list schedual") 
      
      }).populate("class")
  
  })

  // router.get('/scheduall/:id', (req, res) => {
  //   console.log('list schedual')
  //   schedualModel.find({_id:req.params.id},(err,data)=>{
  //     if(!err) return res.json(data) 
  //     res.send("erro cannot list schedual") 
      
  //     }).populate("class")
  
  // })

 

//get all days
  // router.get('/days',passport.authenticate('jwt', { session : false}),  (req, res) => {
  //   console.log('list days')
  //   schedualModel.find({},(err,data)=>{
  //     if(!err) return res.json(data) 
  //     res.send("erro cannot list days") 
      
  //     })
  
  // })

//sturday Schedual
  router.get('/schedual/sturday/:id', (req, res) => {
    console.log('list sturday Courses')
    SchedularSturday.find({schedular:req.params.id},(err,data)=>{
      if(!err) return res.json(data) 
      res.send("erro cannot list sturday Courses") 
      
      })
  
  })


  //add days on schedual
router.post('/schedual', (req, res) => {
  // const day=req.body.day;

  console.log(req.body) ///
  const userData = req.body
  const userInstance = new schedualModel({

 
 class:req.body.class,


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
  
router.post('/schedual/sturday', (req, res) => {
  // const day=req.body.day;
  const courses=req.body.courses;
 const schedular =req.body.schedular; 
  console.log(req.body) ///
  const userData = req.body
  const userInstance = new SchedularSturday({

 
 courses,
 schedular,


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
////////////////////////

router.post('/schedual/sunday', (req, res) => {
  // const day=req.body.day;
  const courses=req.body.courses;
 const schedular =req.body.schedular; 
  console.log(req.body) ///
  const userData = req.body
  const userInstance = new SchedularSunday({

 
 courses,
 schedular,


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
// get SundaySchedual

router.get('/schedual/Sunday/:id', (req, res) => {
  console.log('list sturday Courses')
  SchedularSunday.find({schedular:req.params.id},(err,data)=>{
    if(!err) return res.json(data) 
    res.send("erro cannot list sturday Courses") 
    
    })

})

/////////////////////////

router.post('/schedual/monday', (req, res) => {
  // const day=req.body.day;
  const courses=req.body.courses;
 const schedular =req.body.schedular; 
  console.log(req.body) ///
  const userData = req.body
  const userInstance = new SchedularMonday({

 
 courses,
 schedular,


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
// get MondaySchedual

router.get('/schedual/monday/:id', (req, res) => {
  console.log('list sturday Courses')
  SchedularMonday.find({schedular:req.params.id},(err,data)=>{
    if(!err) return res.json(data) 
    res.send("erro cannot list sturday Courses") 
    
    })

})
////////////////////

router.post('/schedual/tusday', (req, res) => {
  // const day=req.body.day;
  const courses=req.body.courses;
 const schedular =req.body.schedular; 
  console.log(req.body) ///
  const userData = req.body
  const userInstance = new SchedularTusday({

 
 courses,
 schedular,


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
// get TusdaySchedual

router.get('/schedual/tusday/:id', (req, res) => {
  console.log('list sturday Courses')
  SchedularTusday.find({schedular:req.params.id},(err,data)=>{
    if(!err) return res.json(data) 
    res.send("erro cannot list sturday Courses") 
    
    })

})
/////////////////////////

router.post('/schedual/wensday', (req, res) => {
  // const day=req.body.day;
  const courses=req.body.courses;
 const schedular =req.body.schedular; 
  console.log(req.body) ///
  const userData = req.body
  const userInstance = new SchedularWensday({

 
 courses,
 schedular,


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
// get MondaySchedual

router.get('/schedual/wensday/:id', (req, res) => {
  console.log('list sturday Courses')
  SchedularWensday.find({schedular:req.params.id},(err,data)=>{
    if(!err) return res.json(data) 
    res.send("erro cannot list sturday Courses") 
    
    })

})

///////////////////


router.post('/schedual/thrisday', (req, res) => {
  // const day=req.body.day;
  const courses=req.body.courses;
 const schedular =req.body.schedular; 
  console.log(req.body) ///
  const userData = req.body
  const userInstance = new SchedularThrisday({

 
 courses,
 schedular,


  })
  console.log(userInstance);
  


  userInstance.save((err,userDoc)=>{
      if(!err) return res.json(userDoc)
      console.log(err);
      res.send("error occured while saving")
  })
})
// get MondaySchedual

router.get('/schedual/thrisday/:id', (req, res) => {
  console.log('list sturday Courses')
  SchedularThrisday.find({schedular:req.params.id},(err,data)=>{
    if(!err) return res.json(data) 
    res.send("erro cannot list sturday Courses") 
    
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

/////////////////////


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
          
          }).populate("level").populate("class")
      
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

router.delete("/:id",passport.authenticate('jwt', { session : false}), async (req, res) => {
	try {
		
		await userModel.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "user doesn't exist!" })
	}
})


//get user by id
router.get("/:id", passport.authenticate('jwt', { session : false}),async (req, res) => {
  try {

const user = await userModel.findOne({ _id: req.params.id })
res.send(user)
  }
  catch {
  res.status(404)
  res.send({ error: "Course doesn't exist!" })
}
})


//Update user data
router.patch("/:id", async (req, res) => {
	try {
		const user = await userModel.findOne({ _id: req.params.id })

		if (req.body.firstName) {
			user.firstName = req.body.firstName
		}

    if (req.body.lastName) {
			user.lastName = req.body.lastName
		}

    if (req.body.phone) {
			user.phone = req.body.phone
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
		res.send({user,success:true})
	} catch {
		res.status(404)
		res.send({ error: "user doesn't exist!" })
	}
})

  

      //get student with id  authontication
      router.get('/ProfileInfo/:id', (req, res) => {
        console.log('list ProfileInfo')
        // const token =req.header('x-auth');
        // console.log(token);
        userModel.find({_id:req.params.id},(err,data)=>{
          if(!err) return res.json(data) 
          res.send("erro cannot list ProfileInfo") 
          
          })
      
      })


      ///attendence

      router.post('/attendence', (req, res) => {
        const status=req.body.status;
        const date=req.body.date;
        const student=req.body.student;


 
        console.log(req.body) ///
        const userData = req.body
        const userInstance = new Attendence({
          status,
          date,
          student
      
      
        })
        console.log(userInstance);
        
      
      
        userInstance.save((err,userDoc)=>{
            if(!err) return res.json(userDoc)
            console.log(err);
            res.send("error occured while saving")
        })
    })
    
    router.get('/attendence/:id', (req, res) => {
      console.log('list student attendence')
      // const token =req.header('x-auth');
      // console.log(token);
      Attendence.find({student:req.params.id},(err,data)=>{
        if(!err) return res.json(data) 
        res.send("erro cannot list student attendence") 
        
        })
    
    })

//user login status

router.patch("/studenStatuse/:id", async (req, res) => {
	try {
    console.log();
		const user = await userModel.findOne({ _id: req.params.id })

		
     if (req.body) {
       console.log(req.body.status);
			user.status = req.body.status;
      console.log("mmm");

		 }

     
		await user.save()
		res.send(user)
	} catch {
		res.status(404)
		res.send({ error: "user doesn't exist!" })
	}
})

  
module.exports = router;
