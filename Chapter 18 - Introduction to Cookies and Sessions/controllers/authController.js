exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    isLoggedin :false,
    pageTitle: "Login",
    currentPage: "Login",
    editing: false,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedin = true;
  // res.cookie("isLoggedin", true)
  // req.isLoggedin = true;
  res.redirect("/");
}
exports.postLogout = (req, res, next) => {
  req.session.isLoggedin = false;
  res.redirect("/login");
}