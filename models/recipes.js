// Global
const orm = require("../config/orm.js");
// Burger
const recipes = {
    select: function(cb){
        orm.selectAll("recipes",function(res){
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
// Export Burger
module.exports = recipes;