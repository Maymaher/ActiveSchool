const mongoose=require('mongoose');
const validator = require("validator")

schedual_mondayschema=new mongoose.Schema({

courses:{type:String,required:true},
schedular: {type:mongoose.Schema.Types.ObjectId, ref:'Schedual', required:false},
 


});


schedual_mondayModel = mongoose.model('SchedualMonday',schedual_mondayschema);

module.exports =schedual_mondayModel;