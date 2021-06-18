var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
var router = express.Router();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var attendenceRouter = require('./routes/attendence');
var studentRouter = require('./routes/student');
var classRouter = require('./routes/class');
var levelRouter = require('./routes/level');

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
app.use('/student', studentRouter);
app.use('/class', classRouter);
app.use('/level', levelRouter);







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
