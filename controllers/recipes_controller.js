const express = require("express");
const recipes = require("../models/recipes.js");
const router = express.Router();

//Route to home page
router.get('/',function(req,res){   
    recipes.select(function(){
        
    });
    res.render('index');
});

//Route to list of recipes
router.get('/library',function(req,res){
    recipes.select(function(data){
        var hbsObject = { recipes: data };
        res.render('library',hbsObject);
    });
});

//Route to view a specific recipe after selecting it
router.get('/viewer/:name',function(req,res){
    var name = `recipe_name = "${req.params.name}"`;

    recipes.recipe(name, function(data){
        // ingredients list parse testing:
        let str = data[0].ingredients;
        let array = str.split(",");
        data[0].ingredientsArray = array;

        var hbsObject = { recipes: data };
        res.render('viewer',hbsObject);
    });
});

//Route to adding a new recipe to database
router.post("/add",function(req,res){
    recipes.create(req.body.recipe_name,req.body.ingredients,req.body.directions,
    req.body.total_time,req.body.number_of_servings, function(result){
        res.redirect('/library');
    });
    
});

//Route to deleting a recipe based on ID
router.post("/delete", function(req,res){
    recipes.delete(recipe_id, function (){
        res.redirect("/library");
    });
});

//Default error route
router.get("*", function(req,res){
    res.render("404")
});

module.exports = router;