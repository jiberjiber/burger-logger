// Add Dependencies
const connection = require('../config/connection.js');


// ORM Object
const orm = {
    all: function(table, cb){
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, result){
            if(err) throw err;

            console.log(result);

            cb(result);
        });
    },
    create: function(table, val, cb){
        console.log(val);
        var queryString = `INSERT INTO ${table} (burger_name, devoured)`;
        queryString += ` VALUES ('${val.name}', false);`;

        console.log(`Query: ${queryString}`);

        connection.query(queryString, function(err, result){
            if(err) throw err;

            cb(result);
        });
    },
    update: function(table, col, target, cb){
        var queryString = `UPDATE ${table} SET ${col} = true WHERE id = ${target};`

        connection.query(queryString, function(err, result){
            if(err) throw err;

            cb(result);
        });
    },
    delete: function(table, target, cb){
        var queryString = `DELETE FROM ${table}`;
        queryString += ` WHERE id = ${target}`;

        connection.query(queryString, function(err, result){
            if(err) throw err;

            cb(result);
        });
    }
};


// Set export
module.exports = orm;