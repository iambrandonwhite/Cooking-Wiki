// Global
const orm = require("../config/orm.js");

// Recipes
const recipes = {

    //Displaying table of recipe
    select: function(cb){
        orm.selectAll("recipes",function(res){
            cb(res);
        });
    },

    //Displaying single recipe
    recipe: function(recipe_name,cb){
        console.log("model", recipe_name)
        orm.selectRecipe_name("recipes", recipe_name,function(res){
            cb(res);
        });
    },

    //Creating a single recipe to datatable
    create: function(recipe_name, ingredients, directions, total_time, number_of_servings,cb){
        console.log (recipe_name, ingredients, directions, total_time, number_of_servings);
        orm.insertOne("recipes",recipe_name, ingredients, directions, total_time, number_of_servings,function(res){
            cb(res);
        });
    },

    //Deleting a single recipe entry
    delete: function(recipe_id, cb){
        orm.deleteOne("recipes", recipe_id, function(res){
            cb(res);
        });
    },

};

// Export Recipes
module.exports = recipes;