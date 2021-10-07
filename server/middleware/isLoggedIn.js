exports.isLoggedIn = (req,res,next) => {
    console.log(req)
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("localhost:3000/login");
  
  } 