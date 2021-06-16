const mongoose=require('mongoose');
const validator = require("validator")

materialschema=new mongoose.Schema({

student:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:false},

courseLevel:{type:mongoose.Schema.Types.ObjectId,ref:'CourseLevel',required:false},
teacher:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:false}


});


materialModel = mongoose.model('Material', materialschema);

module.exports = materialModel;