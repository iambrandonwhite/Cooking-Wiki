// Global
const express = require("express");
const recipes = require("../models/recipes.js");
const router = express.Router();
// Default the route to /burgers (Main Home Page)
router.get('/',function(req,res){
    res.redirect("/recipes");
});
// Get Burgers
router.get('/recipes',function(req,res){
    recipes.select(function(data){
        var hbsObject = { recipes: data };
        res.render('index',hbsObject);
    });
});
// Create Burger
router.post("/recipes/create",function(req,res){
    recipes.create(["recipe_name"],[req.body.recipe_name],function(result){
        res.redirect("/recipes");
    });
});
// Update Burger
// router.put('/burgers/update/:id', function(req,res){
//     var condition = `id = ${req.params.id}`;
//     burger.update({ 'devoured': req.body.devoured },condition,function(data){
//         res.redirect('/burgers');
//     });
// });
// Export Router
module.exports = router;