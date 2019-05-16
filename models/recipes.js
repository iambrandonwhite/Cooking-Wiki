// Global
const orm = require("../config/orm.js");
// Burger
const recipes = {
    select: function(cb){
        orm.selectAll("recipes",function(res){
            cb(res);
        });
    },

    recipe: function(recipe_name,cb){
        console.log("model", recipe_name)
        orm.selectRecipe_name("recipes", recipe_name,function(res){
            cb(res);
        });
    },
    create: function(recipe_name, ingredients, directions, total_time, number_of_servings,cb){
        console.log (recipe_name, ingredients, directions, total_time, number_of_servings);
        orm.insertOne("recipes",recipe_name, ingredients, directions, total_time, number_of_servings,function(res){
            cb(res);
        });
    },

    delete: function(recipe_id, cb){
        orm.deleteOne("recipes", recipe_id, function(res){
            cb(res);
        });
    },

    update: function(objColVals,condition,cb){
        orm.updateOne("recipes",objColVals,condition,function(res){
            cb(res);
        });
    }
};


// Export Burger
module.exports = recipes;