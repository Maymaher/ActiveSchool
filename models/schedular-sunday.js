const mongoose=require('mongoose');
const validator = require("validator")

schedual_sundayschema=new mongoose.Schema({

courses:{type:String,required:true},
schedular: {type:mongoose.Schema.Types.ObjectId, ref:'Schedual', required:false},

});


schedual_sundayModel = mongoose.model('SchedualSunday',schedual_sundayschema);

module.exports =schedual_sundayModel;