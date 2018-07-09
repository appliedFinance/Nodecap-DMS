'use strict';

const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
	name: {
		firstName: String,
		middleName: String,
		lastName: String
	},
	type: String, //corp or w2
	companyName: String,
	address: {
		street1: String,
		street2: String,
		city: String,
		state: String,
		zipcode: String
	},
	phone: String,
	email: String,
	otherInfo: String,
	jobTitle: String,
	payRate: Number,
	OTPayRate: Number,
	billRate: Number,
	OTBillRate: Number,
	paidHolidays: String,
	startDate: String,
	endDate: String,
	length: String  // estimated lenght of assignment at hire
});

/*
employeeSchema.virtual('fullName').get( function() {
	return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
}

employeeSchema.virtual('addressString').get( function() {
	let s = `${this.address.street1}`.trim();
	if (this.address.street2) { s += `, ${this.address.street2}, `.trim();	};
	s += `${this.address.city}, ${this.address.state} {$this.address.zipcode}`;
	return s;
}

employeeSchema.methods.serialize = function() {
	return {
		id: this._id,
		name: this.fullName,
		type: this.type,
		companyName: this.companyName,
		address: this.addressString,
		phone: this.phone,
		email: this.email,
		otherInfo: this.otherInfo,
		jobTitle: this.jobTtile,
		payRate: this.payRate,
		OTPayRate: this.OTPayRate,
		billRate: this.billRate,
		OTBillRate: this.OTBillRate,
		paidHolidays: this.paidHolidays,
		startDate: this.startDate,
		endDate: this.endDate,
		length: this.length
	};
}
*/

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {Employee};
