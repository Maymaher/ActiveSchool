var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');
const cors = require("cors");
var router = express.Router();
const  LocalStrategy  =  require('passport-local').Strategy;
 
var favicon = require('serve-favicon');
 
var bodyParser = require('body-parser');

 



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
var api = require('./routes/api');


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

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(passport.initialize());
app.use('/api', api);



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

//Db Conection

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
 
 mongoose.set("useFindAndModify", false);
const port = 3200;
app.listen(port, function () {
  console.log(`express web server listening on port ${port}`);
});



module.exports = app;
