const mongoose=require('mongoose');
const validator = require("validator")

userschema=new mongoose.Schema({

name:{type:String,required:true},
email:{type:String,reuired:true, unique:true, validate:{validator: validator.isEmail}},
password:{type:String,required:true,minlength:8},
avatar:{type:String,required:false,default:"default.jpg"},
type:{type:String,
    enum : ['student','admin','teacher','parent'],
    default: 'student'
},
address:{type:String,required:true},


level: {type:mongoose.Schema.Types.ObjectId, ref:'Level', required:false},
classs:{type:mongoose.Schema.Types.ObjectId,ref:'Class',required:false},


});


userModel = mongoose.model('User', userschema);

module.exports = userModel;