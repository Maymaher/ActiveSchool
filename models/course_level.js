const mongoose=require('mongoose');
const validator = require("validator")

courseLevelschema=new mongoose.Schema({



level: {type:mongoose.Schema.Types.ObjectId, ref:'Level', required:false},
course:{type:mongoose.Schema.Types.ObjectId,ref:'Course',required:false},
teacher: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:false},


});


courseLevelModel = mongoose.model('CourseLevel', courseLevelschema);

module.exports = courseLevelModel;