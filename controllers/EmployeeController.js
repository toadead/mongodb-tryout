const Employee = require('../models/Employee');

exports.listAllEmployees = (req, res) => {
	Employee.find({}, (err, emp) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).json(emp);
	});
};

exports.createNewEmployee = (req, res) => {
	let newEmployee = new Employee(req.body);
	newEmployee.save((err, emp) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(201).json(emp);
	});
};

exports.readEmployee = (req, body) => {
	Employee.findById(req.params.employee_id, (err, emp) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).json(emp);
	});
};

exports.updateEmployee = (req, res) => {
	Employee.findOneAndUpdate(
		{ _id: req.params.employee_id },
		req.body,
		{ new: true },
		(err, emp) => {
			if (err) {
				res.status(500).send(err);
			}
			res.status(200).json(emp);
		}
	);
};

exports.deleteEmployee = (req, res) => {
	Employee.remove({ _id: req.params.employee_id }, (err, emp) => {
		if (err) {
			res.status(404).send(err);
		}
		res.status(200).json({ message: "Employee successfully deleted" });
	});
};