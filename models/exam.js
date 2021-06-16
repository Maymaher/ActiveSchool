const mongoose=require('mongoose');
const validator = require("validator")

examschema=new mongoose.Schema({

examFile:{type:String,required:true},

course:{type:mongoose.Schema.Types.ObjectId,ref:'Course',required:false},
teacher:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:false}

});


examModel = mongoose.model('Exam', examschema);

module.exports = examModel;