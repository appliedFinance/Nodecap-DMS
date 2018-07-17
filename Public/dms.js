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


function createNewHireForm() {
	say("open New Hire Form");
	toggleInputFormViewPort();
	$('.js-input-form').html("");
	$('.js-input-form').append( renderInputForm() );
}

function postForm() {
	say("POSTing form ...");

}

function renderInputForm() {
	let s = `
		<form action="/api/employees" method="POST" class="js-in-form">
		<fieldset><legend>New Hire Input</legend>
		<input type="submit" class="in-form-button" name="in-cancel" value="Cancel"> 
		<input type="submit" class="in-form-button" name="in-save"   value="Save"  >
		<br><br>
		<table border="0" cellpadding="0">
		<tr>
		<td class="ar border"></td>
		<td class="border text-lighten center-text">First</td>
		<td class="border text-lighten center-text">Middle</td>
		<td class="border text-lighten center-text">Last</td>
		</tr>
		<tr>
		<td class="ar border bold">Name</td>
		<td class="border"><input class="in-First_Name" type="text" maxlength="50"></td>
		<td class="border"><input class="in-Middle_Name" type="text" maxlength="50"></td>
		<td class="border"><input class="in-Last_Name" type="text" maxlength="50"></td>
		</tr>
		</table>

		<table border="0" cellpadding="5">
		<tr>
		<td class="ar border bold">Type</td>
		<td class="border"><input class="in-Type" type="text" maxlength="5"></td>
		<td class="ar border bold">C2C Name</td>
		<td class="border"><input class="in-C2CName" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Position</td></tr>
		<tr>
		<td class="ar border bold">Job Title</td>
		<td class="border"><input class="in-Job_Title" type="text" maxlength="5"></td>
		</tr>
		<tr>
		<td class="ar border bold">Pay Rate</td>
		<td class="border"><input class="in-Pay_Rate" type="text" maxlength="5"></td>
		<td class="ar border bold">OT Pay</td>
		<td class="border"><input class="in_OT_Pay" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Bill Rate</td>
		<td class="border"><input class="in-Bill_Rate" type="text" maxlength="5"></td>
		<td class="ar border bold">OT Bill</td>
		<td class="border"><input class="in-OT_Bill" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Dates</td></tr>
		<tr>
		<td class="ar border bold">Start Date</td>
		<td class="border"><input class="in-Start_Date" type="text" maxlength="5"></td>
		<td class="ar border bold">End Date</td>
		<td class="border"><input class="in-End_Date" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold center-text">Length</td>
		<td class="border"><input class="in-Length" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Contact</td></tr>
		<tr>
		<td class="ar border bold">Email</td>
		<td class="border"><input class="in-Email" type="text" maxlength="5"></td>
		<td class="ar border bold">Phone</td>
		<td class="border"><input class="in-Phone" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 1</td>
		<td class="border"><input class="in-Street_1" type="text" maxlength="5"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 2</td>
		<td class="border"><input class="in-Street_2" type="text" maxlength="5"></td>
		</tr>
		<tr>
		<td class="ar border bold">City</td>
		<td class="border"><input class="in-City" type="text" maxlength="5"></td>
		<tr>
		<td class="ar border bold">State</td>
		<td class="border"><input class="in-State" type="text" maxlength="5"></td>
		</tr>
		<tr>
		<td class="ar border bold">Zip</td>
		<td class="border"><input class="in-Zip" type="text" maxlength="5"></td>
		</tr>


		</table>
		<br> 
		<input type="submit" class="in-form-button" name="in-cancel" value="CANCEL"> 
		<input type="submit" class="in-form-button" name="in-save"   value="SAVE"  >
		</fieldset>
		</form>

		`;
	return s;
}

