var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
var router = express.Router();
const  passport  =  require('passport');
const  LocalStrategy  =  require('passport-local').Strategy;



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var attendenceRouter = require('./routes/attendence');
var coursesRouter = require("./routes/courses");
var teacherClassRouter = require('./routes/teacher_class');

var studentRouter = require('./routes/student');
var classRouter = require('./routes/class');
var levelRouter = require('./routes/level');
var homeworkRouter = require('./routes/homework');
var examRouter = require('./routes/exam');
var examAnswerRouter = require('./routes/exam_answer');

var matrialRouter = require('./routes/material');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/attendence', attendenceRouter);
app.use('/courses',coursesRouter);
app.use('/student', studentRouter);
app.use('/class', classRouter);
app.use('/level', levelRouter);
app.use('/homeworks',homeworkRouter);


app.use('/exam', examRouter);
app.use('/examAnswer', examAnswerRouter);
app.use('/material', matrialRouter);




app.use('/teacherclass', teacherClassRouter);

// app.use('/getclasses', teacherClass);


//Authontication
// const auth = () => {
//   return (req, res, next) => {
//       next()
//   }
// }

// app.post('/authenticate', auth() , (req, res) => {
//   res.status(200).json({"statusCode" : 200 ,"message" : "hello"});
// });



// app.use("/api/users", usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Auth
const auth = () => {
  return (req, res, next) => {
      passport.authenticate('local', (error, user, info) => {
          if(error) res.status(400).json({"statusCode" : 200 ,"message" : error});
          req.login(user, function(error) {
              if (error) return next(error);
              next();
          });
      })(req, res, next);
  }

}

app.post('/authenticate', auth() , (req, res) => {
  res.status(200).json({"statusCode" : 200 ,"message" : "hello"});

passport.use(new LocalStrategy(
  function(username, password, done) {
      if(username === "admin" && password === "admin"){
          return done(null, username);
      } else {
          return done("unauthorized access", false);
      }
  }
));



passport.serializeUser(function(user, done) {
  if(user) done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(null, id);
});

app.use(passport.initialize());
app.use(passport.session());

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next()
    }
    return res.status(400).json({"statusCode" : 400, "message" : "not authenticated"})
}

app.get('/getData', isLoggedIn, (req, res) => {
  res.json("data")
})
const MONGO_URL = "mongodb://localhost:27017/ActiveSchoolDB";
mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("connected to mongoose");
  }
);
mongoose.set("useFindAndModify", false);
const port = 3200;
app.listen(port, function () {
  console.log(`express web server listening on port ${port}`);
});


module.exports = app;
