
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
    //  console.log("controller",name);
    recipes.recipe(name, function(data){
        var hbsObject = { recipes: data };
        res.render('viewer',hbsObject);
    });
});

router.get('/add', function(req, res){
    res.render('add');
});


router.post("/add",function(req,res){
    recipes.create(req.body.recipe_name,req.body.ingredients,req.body.directions,
    req.body.total_time,req.body.number_of_servings, function(result){
        res.redirect('/library');
    });
    
});

router.post("/delete", function(req,res){
    recipes.delete(recipe_id, function (){
        res.redirect("/library");
    });
});

router.get("*", function(req,res){
    res.render("404")
});



module.exports = router;