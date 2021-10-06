var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const passport = require('passport')
const LocalStrategy = require('passport-local')
const UserDetails = require('./models/user')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const expressSession = require('express-session')({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
});


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressSession);





app.use('/', indexRouter);
app.use('/users', usersRouter);
//passport stuff
passport.serializeUser(UserDetails.serializeUser());
passport.deserializeUser(UserDetails.deserializeUser());
passport.use(new LocalStrategy(UserDetails.authenticate()));

app.use(passport.initialize());
app.use(passport.session());
/*app.use(isLoggedIn)

function isLoggedIn(req,res,next) {
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect("/login");
} */

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
}); */

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
}); */

module.exports = app;
