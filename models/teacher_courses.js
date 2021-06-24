const mongoose=require('mongoose');
const validator = require("validator")

teacherCourseschema=new mongoose.Schema({



course:{type:mongoose.Schema.Types.ObjectId,ref:'Course',required:false},
teacher: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:false},


});


teacherCourseModel = mongoose.model('TeacherCourse', teacherCourseschema);

module.exports = teacherCourseModel;