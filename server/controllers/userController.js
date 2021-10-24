const passport = require('passport');
const userModel = require('../models/user');

exports.userLogin = (req, res, next) => {
  console.log('dyssman');
  /* passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true }) */
  passport.authenticate('local', (err, user) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(404).redirect('http://localhost:3000/login');
    }
    console.log(user);
    return res.redirect(`http://localhost:3000/${user._id}`);
  })(req, res, next);
};

exports.registerUser = async (req, res) => {
  userModel.register(
    userModel({
      username: req.body.username,
    }),
    req.body.password,
    (err) => {
      // om error
      if (err) {
        console.log(err);
        res.send('register');
      }
      // annars
      passport.authenticate('local')(req, res, () => {
        res.redirect('/login');
      });
    },
  );
};

exports.getLoginpage = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'this route is not defined',
  });
};
