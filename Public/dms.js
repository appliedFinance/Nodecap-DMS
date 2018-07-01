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

function load_MainMenu() {
	say("+ load_MainMenu");

}


function watcher() {
	load_MainMenu();
	load_MockData();
};


$(watcher);
