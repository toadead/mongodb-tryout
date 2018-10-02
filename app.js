'use strict';

const express = require("express");
const parser = require("body-parser");

// db and controllers
require('./db');
const EmployeeController = require('./controllers/EmployeeController');

const app = express();

const port = process.env.PORT || 3301;
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});

app.route("/employees")
	.get(EmployeeController.listAllEmployees)
	.post(EmployeeController.createNewEmployee);

app.route("/employees/:employee_id")
	.get(EmployeeController.readEmployee)
	.put(EmployeeController.updateEmployee)
	.delete(EmployeeController.deleteEmployee);