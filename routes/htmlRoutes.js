var recipes = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index")
  });

  app.get("/library", function(req, res) {
    let data = {
      pageTitle: recipes.title,
      pageServings: recipes.servings,
      pageTime: recipes.time
    };
    res.render("library", data)
  });

  app.get("/add", function(req, res) {
    res.render("add")
  });

  // Load example page and pass in an example by id
  app.get("/recipe/:id", function(req, res) {
    let data = {

    };
    res.render("viewer", data)
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
