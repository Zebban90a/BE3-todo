const userModel = require('../models/user')
const passport = require('passport')


exports.userLogin = (req, res, next) => {
  
  passport.authenticate('local', 
  (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect('/fail');
    }

    else {
      console.log(user)
      return res.redirect('/success');
    }
  
  })(req, res, next); 
};

exports.registerUser = async (req, res) => {
      userModel.register(userModel({
          username: req.body.username,
          }),
          req.body.password, function(err,user) {
              //om error
              if(err){
                  console.log(err);
                  res.send("register");
              }
              //annars
              passport.authenticate("local")(req,res,function(){
              res.redirect("/login");
              })  
          }) 
}


exports.getUserObject = () => {
  
};