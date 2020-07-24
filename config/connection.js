const mysql = require('mysql');
const { connect } = require('http2');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "testing",
    password: "password",
    database: "cat_db"
});

connection.connect(err => {
    if(err){
        console.error('error: ' + err.stack);
        return;
    }
    console.log('Connected as ID: ' + connection.threadId);
});

module.exports = connection;