const mongoose=require('mongoose');
const validator = require("validator")
var date=new Date();
date=date.toString();
examAnswerschema=new mongoose.Schema({

student:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:false},
exam:{type:mongoose.Schema.Types.ObjectId,ref:'Exam',required:false},
answer:{type:String,required:true},
date:{type:Date,required:true,default:date},
grade:{type:Number,default:0.0}


});


examAnswerModel = mongoose.model('ExamAnswer', examAnswerschema);

module.exports = examAnswerModel;