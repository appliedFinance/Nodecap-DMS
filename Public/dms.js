// Client side 
const say = console.log;


function load_MainMenu() {
	say("+ load_MainMenu");

	$('.js-main-menu').html(`
		<div class="dropdown">
		<button class="dropbtn">Active Work</button>
		<div class="dropdown-content">
		<a href="#">Employees</a>
		<a href="#">OnSite</a>
		<a href="#">Invoices</a>
		</div>
		</div>
		`);
}

function renderAADirItem(name,type,startDate) {
	let s = `
		<div class="emp-summary">
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


function watcher() {
	say("+ watcher");	
	load_MainMenu();
	load_MockData();
};


$(watcher);
