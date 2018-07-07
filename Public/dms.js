// Client side 
const say = console.log;


function load_MainMenu() {
	say("+ load_MainMenu");

	$('.companyName').html("Moonstone Academy");
	say("Moostone");

	$('.js-main-menu').html("");
	$('.js-main-menu').html(
		`
		<div class="dropdown">
		<button class="dropbtn">Active Work</button>
		<div class="dropdown-content">
		<a href="#" class="one db">List Employees</a>
		<a href="#" class="two rtp">1. Margin Report</a>
		<a href="#" class="three rpt">2. Starts Report</a>
		<a href="#" class="four rpt">3. OnSite Report</a>
		</div>
		</div>
		`);
}

function toggleViewPort() {
	$('.js-data').toggleClass("hidden");
	$('.js-employee').toggleClass("hidden");
}



function watcher() {
	say("+ watcher");
	load_MainMenu();

	// show the individual record view
	$('.js-data').on("click", ".a-dir", function(event) {
		displayEmpView($(this).attr("data-index"));
		toggleViewPort();
	});

	// switch to a-dir veiw from individual record view
	$('.js-employee').on("click", function() {
		toggleViewPort();
	});

	// get from the database all records
	$('.js-main-menu').on("click", "a.one", function(event) {
		updateEmployeeList();
	});


};////////
$(watcher);



