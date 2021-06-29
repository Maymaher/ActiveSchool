const mongoose=require('mongoose');
const validator = require("validator")

schedual_tusdayschema=new mongoose.Schema({

courses:{type:String,required:true},
schedular: {type:mongoose.Schema.Types.ObjectId, ref:'Schedual', required:false},
 


});


schedual_tusdayModel = mongoose.model('SchedualTusday',schedual_tusdayschema);

module.exports =schedual_tusdayModel;