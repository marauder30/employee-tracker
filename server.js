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
    init();
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
            "View a department",
            "Quit"
        ]
    }).then(function(answer) {
        switch (answer.action) {
            case "Add an employee":
              addEmployee();
              break;

            case "View an employee":
              viewEmployee();
              break;

            case "Update an employee":
              updateEmployee();
              break;

            case "Add a role":
              addRole();
              break;

            case "View a role":
              viewRole();
              break;

            case "Add a department":
              addDepartment();
              break;

            case "View a department":
              viewDepartment();
              break;

            case "Quit":
              connection.end();
        }
    });

}

function addEmployee() {
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "Please enter the employee's first name."
        },
        {
            name: "last_name",
            type: "input",
            message: "Please enter the employee's last name."
        },
        {
            name: "roleID",
            type: "input",
            message: "Please enter the employee's role ID."
        },
        {
            name: "manager_id",
            type: "input",
            message: "Please enter the employee's manager's ID number. Press enter if the employee has no manager."
        }
    ]).then(function(answers) {
        console.log(answers);
        connection.query(
            "INSERT INTO employee SET ?",
            {
                first_name: answers.first_name,
                last_name: answers.last_name,
                roleID: answers.roleID,
                manager_id: answers.manager_id || NULL
            },

            function(err) {
                if (err) throw err;
                inquirer.prompt([
                    {
                        name: "title",
                        type: "input",
                        message: "Please enter the employee's title."
                    },
                    {
                        name: "salary",
                        type: "input",
                        message: "Please enter the employee's salary."
                    }   
                ]).then(function(answers) {
                    console.log(answers);
                    connection.query(
                        "INSERT INTO role SET ?",
                        {
                            title: answers.title,
                            salary: answers.salary
                        },

                        function(err) {
                            if (err) throw err;
                            inquirer.prompt({
                                name: "department_id",
                                type: "input",
                                message: "Please enter the department ID number.",
                            }).then(function(answer) {
                                console.log(answer);
                                connection.query(
                                    "INSERT INTO department SET ?",
                                    {
                                        name: answer.department_id
                                    },

                                    function(err) {
                                        if (err) throw err;
                                        init();
                                    }
                                )
                            });
                        }
                    )
                })
                
            }
        );
    });
    
}

function viewEmployee() {
    connection.query("SELECT * FROM employee", function(err, results) {
        console.log(results);
        if (err) throw err;
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function() {
                    var choiceArray = [];
                    for (var i = 0; i < results.length; i++) {
                        console.log(results[i]);
                      choiceArray.push(results[i]);
                    }
                    return choiceArray;
                },
                message: "Please select an employee to view"
            }
        ]).then(function(answer) {
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
              if (results[i] === answer.choice) {
                chosenItem = results[i];
                return chosenItem;
              }
            }
        });

        init();
    });

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