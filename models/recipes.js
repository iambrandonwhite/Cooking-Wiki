const orm = require("../config/orm.js");

const recipes = {
    select: function(cb){
        orm.selectAll("recipes",function(res){
            cb(res);
        });
    },

    recipe: function(recipe_name,cb){
        orm.selectRecipe_name("recipes", recipe_name,function(res){
            cb(res);
        });
    },
    create: function(cols,vals,cb){
        orm.insertOne("recipes",cols,vals,function(res){
            cb(res);
        });
    },
    update: function(objColVals,condition,cb){
        orm.updateOne("recipes",objColVals,condition,function(res){
            cb(res);
        });
    }
};

module.exports = recipes;