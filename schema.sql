DROP DATABASE IF EXISTS roster;
CREATE DATABASE roster;

USE roster;

CREATE TABLE employee(
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NULL,
PRIMARY KEY(id)
);

CREATE TABLE role(
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NOT NULL,
department_id INT NULL
);

CREATE TABLE department(
name VARCHAR(30) NOT NULL
);

SELECT * FROM employee, role, department;
