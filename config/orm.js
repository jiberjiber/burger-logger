// Add Dependencies
const connection = require('../config/connection.js');
const { query } = require('express');


// ORM Object
const orm = {
    all: function(table, cb){
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, res){
            if(err) throw err;

            cb(res);
        });
    },
    create: function(table, val, cb){
        var queryString = `INSERT INTO ${table}(burger)`;
        queryString += ` VALUES (${val});`;

        console.log(`Query: ${queryString}`);

        connection.query(queryString, function(err, result){
            if(err) throw err;

            cb(res);
        });
    },
    update: function(table, objColVals, condition, cb){
        console.log(`Update called!`);
    },
    delete: function(table, condition, cb){
        var queryString = `DELETE FROM ${table}`;
        queryString += ` WHERE burgers = ${condition}`;

        connection.query(queryString, function(err, result){
            if(err) throw err;

            cb(res);
        });
    }
};


// Set export
module.exports = orm;