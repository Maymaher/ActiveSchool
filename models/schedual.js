const mongoose=require('mongoose');
const validator = require("validator")

schedualschema=new mongoose.Schema({
 

class: {type:mongoose.Schema.Types.ObjectId, ref:'Class', required:false},

  


});


schedualModel = mongoose.model('Schedual',schedualschema);

module.exports =schedualModel;