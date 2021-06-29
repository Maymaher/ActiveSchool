const mongoose=require('mongoose');
const validator = require("validator")

schedual_wensdayschema=new mongoose.Schema({

courses:{type:String,required:true},
schedular: {type:mongoose.Schema.Types.ObjectId, ref:'Schedual', required:false},
 


});


schedual_wensdayModel = mongoose.model('Wensday',schedual_wensdayschema);

module.exports =schedual_wensdayModel;