// Client side 
'use strict'
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

function toggleDataViewPort() {
	$('.js-data').toggleClass("hidden");
	$('.js-employee').toggleClass("hidden");
}

function load_DataControls() {
	$('.js-data-controls').html(`
			<button onclick="searchAADir()"       class="control-button">Search</button>
			<button onclick="createNewHireForm()" class="control-button">New Hire</button>
			`);
}//load_DataControls


function watcher() {
	say("+ watcher");
	load_MainMenu();
	load_DataControls();
	

	// show the individual record view
	$('.js-data').on("click", ".a-dir", function(event) {
		displayEmpView($(this).attr("data-index"));
		toggleDataViewPort();
	});

	// switch to a-dir veiw from individual record view
	$('.js-employee').on("click", function() {
		toggleDataViewPort();
	});

	// get from the database all records
	$('.js-main-menu').on("click", "a.one", function(event) {
		$('.js-data-controls').removeClass("hidden");
		updateEmployeeList();
	});

	//////////////////////////////////////////////////////////
	// Handle 'control-button' clicks
	let buttonPressed = "0";
	
	// Get the name of button clicked
	$('.js-input-form').on("click", ".in-form-button", function(event) {
		event.stopPropagation();
		event.preventDefault();
		buttonPressed = $(this).attr("name");
		
		if (buttonPressed == "in-cancel") {
			say("You pressed:  " + buttonPressed);
			let msg;
			if (confirm("Save Changes?")) {
				buttonPressed= "in-save";	
			} else {
				// do nothing	
			}
		}
		if (buttonPressed == "in-save") {
			say("You pressed:  " + buttonPressed);
			postForm();
			//toggleSpinner();
		}
		buttonPressed="";
		toggleInputFormViewPort();
	});

};////////
$(watcher);

function searchAADir() {
	say("Searching ...");
}


function toggleInputFormViewPort() {
	$('.js-data-controls').toggleClass("hidden");
	$('.js-data').toggleClass("hidden");
	$('.js-input-form').toggleClass("hidden");
}


