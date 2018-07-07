const empData = [];  // global



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function displayEmpView(i) {
	say("+ displayEmpView");
	let  firstName = empData[i].name.firstName;
	let middleName = empData[i].name.middleName;
	let   lastName = empData[i].name.lastName;
	let       type = empData[i].type;
	let    c2cName = empData[i].companyName;
	let      phone = empData[i].phone;
	let      email = empData[i].email;
	let        pay = empData[i].payRate;
	let      OTpay = empData[i].OTPayRate;
	let       bill = empData[i].billRate;
	let     OTbill = empData[i].OTBillRate;

	say("first name = " + firstName);
	let s = `
		<div class="emp-container emp-blue">
		<h2 class="center">Contractor</h2>
		</div>

		<form class="emp-container">
		<div class="row">
		<p>
		<div class="col-4">
		<label>First Name
		<input class="emp-input" type="text" value="${firstName}">
		</label>
		</div>
		<div class="col-4">
		<label>Middle
		<input class="emp-input" type="text" value="${middleName}">
		</label>
		</div>
		<div class="col-4">
		<label>Last Name
		<input class="emp-input" type="text" value="${lastName}">
		</label>
		</div>
		</p>
		</div>

		<div class="row">
		<p>	
		<div class="col-6">
		<label>Email</label>
		<input class="emp-input" type="text" value="${email}"></p>
		</div>
		<div class="col-6">
		<label>Phone</label>
		<input class="emp-input" type="phone" value="${phone}"></p>
		</div>
		</p>
		</div>

		<div class="row">
		<p>
		<div class="col-6">
		<label>Type</label>
		<input class="emp-input" type="text" value="${type}">
		</label>
		</div>
		<div class="col-6">
		<label>C2C Name
		<input class="emp-input" type="text" value="${c2cName}"></p>
		</label>
		</div>
		</p>
		</div>

		<div class="row">
		<p>
		<div class="col-6">
		<label>Pay Rate</label>
		<input class="emp-input" type="text" value="${pay}">
		</label>
		</div>
		<div class="col-6">
		<label>OT Pay Rate
		<input class="emp-input" type="text" value="${OTpay}"></p>
		</label>
		</div>
		</p>
		</div>

		<div class="row">
		<p>
		<div class="col-6">
		<label>Bill Rate</label>
		<input class="emp-input" type="text" value="${bill}">
		</label>
		</div>
		<div class="col-6">
		<label>OT Bill Rate 
		<input class="emp-input" type="text" value="${OTbill}"></p>
		</label>
		</div>
		</p>
		</div>
		`;
	renderEmpView(s);
}

function renderEmpView(empdata) {
	$('.js-employee').html("");
	$('.js-employee').append(empdata);
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function makeAADirItem(emp,index) {
	let fn = emp.name.firstName;
	let ln = emp.name.lastName;
	let type = emp.type;
	let startDate = emp.startDate;
	let s = `
		<div class="a-dir" data-index="${index}">
		<div class="row">
		<div class="col-6">
		<p>${ln}, ${fn} -- ${type} -- ${startDate} thru _</p>
		</div>
		<div class="col-6 dir-button">
		<button>OnSite</button>
		<button>Edit</button>
		<button>Print</button>
		</div>
		</div>
		</div>
		`;
	return s;
}

function renderAADirItem(elt) {
	$('.js-data').append(elt);
}

function createAADir() {
	for(let i=0; i<empData.length; i++) {
		let elt = makeAADirItem(empData[i],i);
		renderAADirItem(elt);
	}
}

function refreshEmployeeData() {
	//
	// Talk To DataBase Here
	//

	let n = 0;
	for(let i=0; i<FakeEmployeeData.length; i++)
	{
		empData[i]= FakeEmployeeData[i];
	}
	// sort the employees by their last name
	empData.sort((a,b) => sortByLastName(a,b));
}

function updateEmployeeList() {
	say("+ updateEmployeeList");
	refreshEmployeeData();
	$('.js-data').html("");
	createAADir();
	say(empData);
}

function sortByLastName(a,b) {
	let key_a = a.name.lastName.toLowerCase();
	let key_b = b.name.lastName.toLowerCase();
	if (key_a < key_b) return -1;
	if (key_a > key_b) return 1;
	return 0;
}

