const mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "testing",
        password: "password",
        database: "burger_db"
    });
}

connection.connect(err => {
    if(err){
        console.error('error: ' + err.stack);
        return;
    }
    console.log('Connected as ID: ' + connection.threadId);
});

module.exports = connection;