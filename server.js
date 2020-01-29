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

function init() {
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "What would you like to do?",
        choices: [
            "Add an employee",
            "View an employee",
            "Update an employee",
            "Add a role",
            "View a role",
            "Add a department",
            "View a department"
        ]
    }).then(function(answer) {
        switch (answer.action) {
            case "Add an employee":

              break;

            case "View an employee":

              break;

            case "Update an employee":

              break;

            case "Add a role":

              break;

            case "View a role":

              break;

            case "Add a department":

              break;

            case "View a department":

              break;
        }
    });

}

function addEmployee() {
    
}

function viewEmployee() {

}

function updateEmployee() {

}

function addRole() {

}

function viewRole() {

}

function addDepartment() {

}

function viewDepartment() {

}