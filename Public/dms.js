// Client side 
const say = console.log;

function renderAADirItem(name,type,startDate) {
	let s = `
		<div class="a-dir">
		<div class="row">
		<div class="col-6">
		<p>${name} -- ${type} -- ${startDate} thru _</p>
		</div>
		<div class="col-6 dir-button">
		<button>Cool-thing</button>
		<button>Edit</button>
		<button>Print</button>
		</div>
		</div>
		</div>
		`;
	return s;
}

function load_MockData() {
	$('.js-data').html("");
	for(let i=0; i<20; i++) {
		let name = "Nugent, Ted";
		let type = "W2";
		let startDate = "3/15/18";
		let elt = renderAADirItem(name,type,startDate);
		say(elt);
		$('.js-data').append(elt);
	}
}

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
	say("+ renderEmpView");
	$('.js-employee').html("");
	$('.js-employee').append(empdata);
}


function load_MainMenu() {
	say("+ load_MainMenu");

}

function toggleViewPort() {
	$('.js-data').toggleClass("hidden");
	$('.js-employee').toggleClass("hidden");
}

function watcher() {
	load_MainMenu();
	load_MockData();

	$('.a-dir').on("click", function() {
		toggleViewPort();
		displayEmpView();
	});
	$('.js-employee').on("click", function() {
		toggleViewPort();
	});

};


$(watcher);



