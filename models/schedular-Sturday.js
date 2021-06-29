const mongoose=require('mongoose');
const validator = require("validator")

schedual_sturdayschema=new mongoose.Schema({

courses:{type:String,required:true},
schedular: {type:mongoose.Schema.Types.ObjectId, ref:'Schedual', required:false},
 


});


schedual_sturdayModel = mongoose.model('SchedualSturday',schedual_sturdayschema);

module.exports =schedual_sturdayModel;