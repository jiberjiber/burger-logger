// Add Dependencies
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mysql = require('mysql');

// Express setup
const app = express();
const PORT = process.env.PORT || 8080;

// JSON Parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.engine("handlebars", handlebars({ defaultLayout:"main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require('./controllers/burgerController.js');
app.use(routes);


// Start server
app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});