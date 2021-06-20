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
class:{type:mongoose.Schema.Types.ObjectId,ref:'Class',required:false},


});
///////////////

userschema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});


/////
userschema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

userModel = mongoose.model('User', userschema);

module.exports = userModel;