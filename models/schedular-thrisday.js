const mongoose=require('mongoose');
const validator = require("validator")

schedual_thrisdayschema=new mongoose.Schema({

courses:{type:String,required:true},
schedular: {type:mongoose.Schema.Types.ObjectId, ref:'Schedual', required:false},
 


});


schedual_thirsayModel = mongoose.model('SchedualThrisday',schedual_thrisdayschema);

module.exports =schedual_thirsayModel;