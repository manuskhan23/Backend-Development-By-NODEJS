const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/edit-home", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
    editing: false,
  });
};

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';

  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      console.log("Home not found for editing.");
      return res.redirect("/host/host-home-list");
    }

    res.render("host/edit-home", {
      home: home,
      pageTitle: "Edit your Home",
      currentPage: "host-homes",
      editing: editing,
    });
  }).catch(err => console.log(err));
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll().then(([registeredHomes])=>{
    res.render("host/host-home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Host Homes List",
      currentPage: "host-homes",
    });
  }).catch(err => console.log(err));
};

exports.postAddHome = (req, res, next) => {
  const { name, price, location, rating, imageUrl, description } = req.body;
  const home = new Home(name, price, location, rating, imageUrl, description);
  home.save()
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch(err => console.log(err));
};

exports.postEditHome = (req, res, next) => {
  const { id, name, price, location, rating, imageUrl, description} = req.body;
  const home = new Home(name, price, location, rating, imageUrl, description, id);
  home.save()
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch(err => console.log(err));
};

exports.postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log('Came to delete ', homeId);
  Home.deleteById(homeId)
    .then(() => {
      res.redirect("/host/host-home-list");
    })
    .catch(err => console.log(err));
};