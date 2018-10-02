const uuid = require('uuid');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employee_schema = new Schema({
	employee_id: {
		type: String,
		required: true,
		default: uuid.v1()
	},
	created_on: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model("Employee", employee_schema, 'Employee');