var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express RESTful API');
});


//Login
router.post('/login', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = { email}
  //Check the user exists
  User.findOne(query, (err, user) => {
    //Error during exuting the query
    if (err) {
      return res.send({
        success: false,
        message: 'Error, please try again'
      });
    }

    //No User match the search condition
    if (!user) {
      return res.send({
        success: false,
        message: 'Error, Account not found'
      });
    }

    //Check if the password is correct
    user.isPasswordMatch(password, user.password, (err, isMatch) => {

        //Invalid password
        if (!isMatch) {
          return res.send({
            success: false,
            message: 'Error, Invalid Password'
          });
        }

        //User is Valid

        const ONE_WEEK = 604800; //Token validtity in seconds

        //Generating the token
        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: ONE_WEEK });

        //User Is Valid
        //This object is just used to remove the password from the retuned fields
        let returnUser = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          id: user._id,
          type: user.type,
          address: user.address,
          avatar: user.avatar,
          level: user.level,
          class: user.class
        }

        //Send the response back
        return res.send({
          success: true,
          message: 'You can login now',
          user: returnUser,
          token
        });
    });

  });

});

//Registeration
router.post('/register', (req, res, next) => {
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    address: req.body.address,
    type: req.body.type,
    level: req.body.level,
    class: req.body.class,
    status:false

  });

  newUser.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Failed to save the user'
      });
    }
    res.send({
      success: true,
      message: 'User Saved',
      user
    });
  });
});


module.exports = router;