// Global
const connection = require("./connections.js");
// Print Question Marks
function printQuestionMarks(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
};
// Object to SQL
function objToSql(ob){
    var arr = [];
    for(var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
};
// Orm
const orm = {
    selectAll: function(table,cb){
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString,function(err,result){
            if(err){
                throw err
            };
            cb(result);
        });
    },

    selectRecipe_name: function(table,recipe_name,cb){
        console.log("orm", recipe_name)
        var queryString = `SELECT * FROM ${table} WHERE ${recipe_name};`;
        console.log (queryString);
        connection.query(queryString,function(err,result){
            if(err){
                throw err
            };
            cb(result);
        });
    },
    insertOne: function(table, recipe_name, ingredients, directions, total_time, number_of_servings, cb){

        connection.query('INSERT INTO ' + table + ' SET ?;',
        {
            recipe_name:recipe_name,
            ingredients: ingredients,
            directions: directions,
            total_time: total_time,
            number_of_servings: number_of_servings
        }
        ,function(err,result){
        if(err){
            throw err;
        }
          cb(result);
        });
    },

    deleteOne: function(table, recipe_id,cb){

        connection.query('DELETE FROM ' + table + ' WHERE ?;',
        {
            recipe_id:recipe_id
        }
        ,function(err,result){
        if(err){
            throw err;
        }
          cb(result);
        });
    },
    updateOne: function(table,objColVals,condition,cb){
        var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`;
        connection.query(queryString,function(err,result){
            if(err){
                throw err
            };
            cb(result);
        });
    }
};
// Export Orm
module.exports = orm;