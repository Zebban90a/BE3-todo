exports.isLoggedIn = (req, res, next) => {
  console.log(req);
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect('http://localhost:3000/login');
};
