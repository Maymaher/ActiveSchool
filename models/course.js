const mongoose=require('mongoose');
const validator = require("validator")

courseschema=new mongoose.Schema({

name:{type:String,required:true},

description:{type:String,required:true},


});


courseModel = mongoose.model('Course', courseschema);

module.exports = courseModel;