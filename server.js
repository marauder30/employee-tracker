const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'SQL$tchamps8080',
    port: 3306,
    database: 'roster'
});

connection.connect(function(err) {
    if (err) throw err;
    // init();
});