const mongoose=require('mongoose');
const validator = require("validator")

homeworkschema=new mongoose.Schema({

name:{type:String,required:true},

courseLevel:{type:mongoose.Schema.Types.ObjectId,ref:'CourseLevel',required:false},


});


homeworkModel = mongoose.model('Homework', homeworkschema);

module.exports = homeworkModel;