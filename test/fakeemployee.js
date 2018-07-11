let faker = require('faker');

const say = console.log;

function rndMiddleName() {
	let s = "";
	let r = Math.trunc(6*Math.random()+1);
	if (r==1 || r==2) {
		s = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'][Math.trunc(26*Math.random())];
	}
	if (r==3) {
		s = faker.name.firstName();
	}
	return s;
}

function rndType() {
	let s=[];
	let r = Math.trunc(6*Math.random()+1);
	if (r==1 || r==2) {
		s[0]="C2C";
		s[1]=faker.company.bsBuzz() + " LLC";
	} else {
		s[0]="W2";
		s[1]="";
	}
	return s;
}

function rndSecondaryAddress() {
	let s="";
	let r = Math.trunc(6*Math.random()+1);
	if (r==1 || r==2) {
		s = faker.address.secondaryAddress();
	}
	return s;
}

function rndOtherInfo() {
	let s="";
	let r = Math.trunc(6*Math.random()+1);
	if (r==1) {
		s = faker.lorem.sentences();
	}
	return s;
}

function rndJobTitle() {
	let s = faker.system.fileType();
	let ss = s.charAt(0).toUpperCase() + s.slice(1);
	let r = Math.trunc(6*Math.random()+1);
	if (r==1 || r==2) {
		ss += " Maker";
	}
	if (r==3 || r==4) {
		ss += " Developer";
	}
	if (r==5 || r==6) {
		ss += " Consultant";
	}
	return ss;
}

function rndPayRates() {
	let x= [];
	let r = Math.trunc(30*Math.random()+1);
	let l = Math.trunc(30*Math.random()+1);
	x[0] = 20 + r;
	x[1] = 1.5*x[0];
	x[2] = x[0] + 15 + l;
	x[3] = 1.5*x[2];
	return x;
}

function generateRandomEmployee() {
	// return JSON of employeeSchema
	
	let myType = rndType();
	let type = myType[0];
	let coName = myType[1].charAt(0).toUpperCase() + myType[1].slice(1);

	let pay = rndPayRates();

	let rndEmp = {
		"name": {
					"firstName": faker.name.firstName(),
					"middleName": rndMiddleName(),
					"lastName": faker.name.lastName()
		},
		"type": type,
		"companyName": coName,
		"address": {
					"street1": faker.address.streetAddress(),
					"street2": rndSecondaryAddress(),
					"city": faker.address.city(),
					"state": faker.address.state(),
					"zipcode": faker.address.zipCode()
		},
		"phone": faker.phone.phoneNumber(),
		"email": faker.internet.email(),
		"otherInfo": rndOtherInfo(),
		"jobTitle": rndJobTitle(),
		"payRate": pay[0],
		"OTPayRate": pay[1],
		"billRate": pay[2],
		"OTBillRate": pay[3],
		"paidHolidays": "No",
		"startDate": "3-1-18",
		"endDate": "_",
		"length": "3 mo"
	};
	return rndEmp;
}

function rndStartEndDates() {
	// and 'length'
	let d = [];
	let day = Math.trunc(28*Math.random()+1);
	let mon = Math.trunc(12*Math.random()+1);
	let year;
}

module.exports = {generateRandomEmployee};

