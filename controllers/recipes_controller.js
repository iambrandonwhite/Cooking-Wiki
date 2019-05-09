
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

router.post("/add",function(req,res){
    recipes.create(["recipe_name"],[req.body.recipe_name],function(result){
        res.render("/add");
    });
});

router.get("*", function(req,res){
    res.render("404")
});

module.exports = router;