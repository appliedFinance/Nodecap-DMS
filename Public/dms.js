// Client side 
'use strict'
const say = console.log;
const COMPANY_NAME = "Fulcrum Ops";

function load_MainMenu() {
	say("+ load_MainMenu");


	$('.companyNAME').html(COMPANY_NAME);

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


function load_DataControls() {
	$('.js-data-controls').html(`
			<button onclick="genTwo()"              class="control-button">Gen2</button>
			<button onclick="refreshEmployeeData()" class="control-button">Refresh</button>
			<button onclick="searchAADir()"         class="control-button">Search</button>
			<button onclick="createNewHireForm()"   class="control-button">New Hire</button>
			`);
}//load_DataControls

let thing = 0;
function searchAADir() {
	say("Searching ...");
	thing = thing + 1;
	if (thing % 2 === 0) { toggleInputFormViewPort(); } else { toggleResetView(); }
}


function toggleInputFormViewPort() {
	$('.js-data-controls').addClass("hidden");
	$('.js-data').addClass("hidden");
	$('.js-employee').addClass("hidden");
	$('.js-input-form').removeClass("hidden");
}


function toggleDataViewPort() {
	$('.js-data-controls').addClass("hidden");
	$('.js-data').addClass("hidden");
	$('.js-employee').removeClass("hidden");
	$('.js-input-form').addClass("hidden");
}

function toggleResetView() {
	$('.js-data-controls').removeClass("hidden");
	$('.js-data').removeClass("hidden");
	$('.js-employee').addClass("hidden");
	$('.js-input-form').addClass("hidden");
	$('.js-employee').html("");
	$('.js-input-form').html("");
}


function watcher() {
	say("+ watcher");
	load_MainMenu();
	load_DataControls();


	// show the individual record view
	$('.js-data').on("click", ".can-click", function(event) {
		displayEmpView($(this).closest(".a-dir").attr("data-index"));
		toggleDataViewPort();
	});

	// switch to a-dir veiw from individual record view
	$('.js-employee').on("click", function() {
		toggleDataViewPort();
	});

	// get from the database all records
	$('.js-main-menu').on("click", "a.one", function(event) {
		toggleResetView();
		updateEmployeeList();
	});

	//////////////////////////////////////////////////////////
	// Handle 'control-button' clicks
	let buttonPressed = "0";
	//		buttonPressed = $(this).attr("name");

	// SAVE BUTTON
	$('.js-input-form').on("click", "input[name='in-save']", function(event) {
		event.stopPropagation();
		event.preventDefault();
		let val = $(this).closest("form").attr("data-num");
		if (val<0) {
			postForm();
		} else {
			say(val);
			putForm(empData[val]._id);
		}
		//toggleSpinner();
		toggleResetView();
	});

	// CANCEL BUTTON
	$('.js-input-form').on("click", "input[name='in-cancel']", function(event) {
		event.stopPropagation();
		event.preventDefault();
		toggleResetView();
	});

	// EDIT BUTTON
	$('.js-employee').on("click", "input[name='in-edit']", function(event) {
		event.stopPropagation();
		event.preventDefault();
		let val = $(this).closest("form").attr("data-num");
		say("Edit Button, index = " + val);
		$('.js-employee').html("");
		toggleInputFormViewPort();
		editEmployeeData(val);
	});


	//////////////////////////////////////////////////////////
	// Handle DELETING a document

	$('.js-data').on("click", "#aa-delete", function(event) {
		const $aa = $(this);
		let n = $aa.closest(".a-dir").attr("data-index");
		let URL = "/api/employees/" + empData[n]._id;

		$.ajax({
			'type': "DELETE",
			'url': URL, 
			'data': '', 
			'dataType': "json",
			'contentType': "application/json",
			'success': function(r) {
				say("DELETE SUCCESSFUL");
				deleteOneAADir(n);
			}
		});
	});


	//////////////////////////////////////////////////////////
	// Handle UPDATE/PUT of a document

	$('.js-data').on("click", "#aa-delete", function(event) {
		const $aa = $(this);


	});

};////////
$(watcher);




