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

	say("- load_MainMenu");
}


function watcher() {
	say("+ watcher");	
	load_MainMenu();

	say("- watcher");
};


$(watcher);
