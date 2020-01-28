USE roster;

INSERT INTO department 
    (name)
VALUES 
    ("Accounting"),
    ("Marketing"),
    ("Sales"),
    ("IT");
    
    INSERT INTO role 
    (title, salary, department_id)
VALUES 
    ("Accountant", 100000, 1),
    ("Salesperson", 75000, 3),
    ("Graphic Artist", 100000, 2),
    ("Salesperson", 70000, 3),
    ("IT Specialist", 100000, 4),
    ("Production", 120000, 2);


INSERT INTO employee 
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Mike", "Smith", 3, NULL),
    ("Ben", "Anderson", 4, 4),
    ("Luke", "Douglass", 12, 3),
    ("Michelle", "Arlington", 4, 4),
    ("Charlie", "Dinkins", 6, NULL),
    ("Lindsay", "Applegate", 5, 3);


