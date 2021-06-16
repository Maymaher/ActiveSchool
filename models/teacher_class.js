const mongoose=require('mongoose');
const validator = require("validator")

teacherClassschema=new mongoose.Schema({



class:{type:mongoose.Schema.Types.ObjectId,ref:'Class',required:false},
teacher: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:false},


});


teacherClassModel = mongoose.model('TeacherClass', teacherClassschema);

module.exports = teacherClassModel;