const express = require("express");
const recipes = require("../models/recipes.js");
const router = express.Router();

router.get('/',function(req,res){   
    recipes.select(function(){
        
    });
    res.render('index');
});

router.get('/library',function(req,res){
    recipes.select(function(data){
        var hbsObject = { recipes: data };
        res.render('library',hbsObject);
    });
});

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

router.get('/add', function(req, res){
    res.render('add');
});

router.post("/add",function(req,res){
    recipes.create(["recipe_name"],[req.body.recipe_name],function(result){
        res.render("library");
    });
});

router.get("*", function(req,res){
    res.render("404")
});



module.exports = router;