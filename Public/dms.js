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

function load_MockData() {
	$('.js-data').html(`
		<div class="a-test">
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
		</div>

		<div class="a-test">
			<p>Some text some text some text some text..</p>
			<p>Some text some text some text some text..</p>
		</div>
		`);
}


function watcher() {
	say("+ watcher");	
	load_MainMenu();
	load_MockData();
};


$(watcher);
