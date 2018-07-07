const empData = [];


function load_MockData() {
	$('.js-data').html("");
	for(let i=0; i<10; i++) {
		let name = "lastName, firstName";
		let type = "W2";
		let startDate = "3/15/18";
		let elt = renderAADirItem(name,type,startDate);
		$('.js-data').append(elt);
	}
}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function displayEmpView() {
	say("+ displayEmpView");
	let s = `
		<div class="emp-container emp-blue">
		<h2 class="center">Contractor</h2>
		</div>

		<form class="emp-container">
		<div class="row">
		<p>
		<div class="col-4">
		<label>First Name
		<input class="emp-input" type="text" value="{ !!! }">
		</label>
		</div>
		<div class="col-4">
		<label>Middle
		<input class="emp-input" type="text" value="{!!!}">
		</label>
		</div>
		<div class="col-4">
		<label>Last Name
		<input class="emp-input" type="text" value="{ !!! }">
		</label>
		</div>
		</p>
		</div>

		<div class="row">
		<p>	
		<div class="col-6">
		<label>Email</label>
		<input class="emp-input" type="text" value="{ !!! }"></p>
		</div>
		<div class="col-6">
		<label>Phone</label>
		<input class="emp-input" type="phone" value=" !!! }"></p>
		</div>
		</p>
		</div>

		<div class="row">
		<p>
		<div class="col-6">
		<label>Type</label>
		<input class="emp-input" type="text" value="{ !!! }">
		</label>
		</div>
		<div class="col-6">
		<label>C2C Name
		<input class="emp-input" type="text" value="{ !!! }"></p>
		</label>
		</div>
		</p>
		</div>

		<div class="row">
		<p>
		<div class="col-6">
		<label>Pay Rate</label>
		<input class="emp-input" type="text" value="{ !!! }">
		</label>
		</div>
		<div class="col-6">
		<label>OT Pay Rate
		<input class="emp-input" type="text" value="{ !!! }"></p>
		</label>
		</div>
		</p>
		</div>

		<div class="row">
		<p>
		<div class="col-6">
		<label>Bill Rate</label>
		<input class="emp-input" type="text" value="{ !!! }">
		</label>
		</div>
		<div class="col-6">
		<label>OT Bill Rate 
		<input class="emp-input" type="text" value="{ !!! }"></p>
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
function makeAADirItem(emp) {
	let fn = emp.name.firstName;
	let ln = emp.name.lastName;
	let type = emp.type;
	let startDate = emp.startDate;

	let s = `
		<div class="a-dir">
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
		let elt = makeAADirItem(empData[i]);
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

