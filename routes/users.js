var express = require('express');
var router = express.Router();
const userModel = require("../models/user");


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
 

router.post('/', (req, res) => {
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
  const avatar=req.body.avatar;
  const  type=req.body.type;
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

module.exports = router;
