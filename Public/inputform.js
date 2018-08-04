// For for POST and PUT


function createNewHireForm() {
	// Display a blank input form, and POST data.
	say("open New Hire Form");
	$('.js-input-form').html("");
	toggleInputFormViewPort(); 
	$('.js-input-form').append( renderInputForm() );
}

function displayEmployeeData(empIndex) {
	// Display current employee data, in input form format, but non-editable
	say("displey Employee Data");
	$('.js-employee').html("");
	$('.js-employee').append( renderEmployeeData(empData[empIndex], empIndex) ); // empData is the global array
}

function editEmployeeData(empIndex) {
	// Display current employee data in an editable input form, and PUT
	say("'edit' Employee Data");
	$('.js-input-form').html("");
	$('.js-input-form').append( renderUpdateForm(empData[empIndex], empIndex) ); // empData is the global array
}


function renderInputForm() {
	return buildEmployeeDataForm(null, -1, true, false, "POST");
}

function renderEmployeeData(employee, n) {
	return buildEmployeeDataForm(employee, n, false, true, "");
}

function renderUpdateForm(employee, n) {
	return buildEmployeeDataForm(employee, n, true, true, "PUT");
}


function fillEmployeeDataObject(formSelector) {
	// Reads the Form's input text fields
	// selects between the PUT and POST forms
	let employeeData = {
		"name": {
			"firstName":  $(formSelector).find('.in-First_Name').val(), 
			"middleName": $(formSelector).find('.in-Middle_Name').val(),
			"lastName":   $(formSelector).find('.in-Last_Name').val()
		},
		"type":        $(formSelector).find('.in-Type').val(),
		"companyName": $(formSelector).find('.in-C2CName').val(),
		"address": {
			"street1": $(formSelector).find('.in-Street_1').val(),
			"street2": $(formSelector).find('.in-Street_2').val(),
			"city":    $(formSelector).find('.in-City').val(),
			"state":   $(formSelector).find('.in-State').val(),
			"zipcode": $(formSelector).find('.in-Zip').val()
		},
		"phone": $(formSelector).find('.in-Phone').val(),
		"email": $(formSelector).find('.in-Email').val(),
		"otherInfo": "",
		"jobTitle":   $(formSelector).find('.in-Job_Title').val(),
		"payRate":    $(formSelector).find('.in-Pay_Rate').val(),
		"OTPayRate":  $(formSelector).find('.in-OT_Pay').val(),
		"billRate":   $(formSelector).find('.in-Bill_Rate').val(),
		"OTBillRate": $(formSelector).find('.in-OT_Bill').val(),
		"startDate":  $(formSelector).find('.in-Start_Date').val(),
		"endDate":    $(formSelector).find('.in-End_Date').val(),
		"length":     $(formSelector).find('.in-length').val()
	};

	return employeeData;
}

// The AJAX calls //////////////////////////////////////////////////
function postForm() {
	say("POSTing form ...");
	let employeeData = fillEmployeeDataObject('.js-input-form > form[method="POST"]');

	$.ajax({
		'type': "POST",
		'url': "/api/employees",
		'data': JSON.stringify(employeeData),
		'dataType': "json",
		'contentType': "application/json",
		'success': function(r) {
			say("POST SUCCESSFUL");
			refreshEmployeeData();
		}
	});
	//say(employeeData);
}//postForm

function putForm(id) {
	say("PUTing form ...");
	let employeeData = fillEmployeeDataObject('.js-input-form > form[method="PUT"]');

	let URL = "/api/employees/" + id;
	$.ajax({
		'type': "PUT",
		'url': URL,
		'data': JSON.stringify(employeeData),
		'dataType': "json",
		'contentType': "application/json",
		'success': function(r) {
			say("PUT SUCCESSFUL");
			refreshEmployeeData();
		}
	});
	//say(employeeData);
}//putForm

////////////////////////////////////////////////////////////////////
function tagIt(editable, className) {
	let s = ''; 
	if (editable) {
		s = 'class="in-' + className + ' in-edit"';
	} else {
		s = 'class="in-display" readonly';
	}
	return s;
}



function buildEmployeeDataForm(employee, n,  editable, withData, method) {
	say("NNN = " + n);
	if (true) {
		say("-----------------");
		if (employee) {
			say("employee = " + employee.name.lastName);
		} else {
			say("employee = ");
		}
		say("       n = " + n);
		say("editable = " + editable);
		say("withData = " + withData);
		say("  method = " + method);
	}
	let s = `
		<form action="/" method="${method}" class="js-in-form" data-num="${n}">
		`;
	if (n<0) {
		s += `<fieldset><legend>New Hire Input</legend>`;
	} else {
		if (editable) {
			s += `<fieldset><legend>*Edit* Employee Document</legend>`;
		} else {
			s += `<fieldset><legend>Display Employee Document</legend>`;
		}
	}

	if (editable && n<0) {
		s += `
			<input type="submit" class="in-form-button" name="in-cancel" value="Cancel"> 
			<input type="submit" class="in-form-button" name="in-save"   value="Save"  >
			`;
	}
	s += `
		<table border="0" cellpadding="0">
		<tr>
		<td class="ar border"></td>
		<td class="border text-lighten center-text">First</td>
		<td class="border text-lighten center-text">Middle</td>
		<td class="border text-lighten center-text">Last</td>
		</tr>
		<tr>
		<td class="ar border bold">Name</td>
		<td class="border"><input ${tagIt(editable, "First_Name")} value="${(employee && employee.name && employee.name.firstName) || ''}" type="text" maxlength="50"></td>
		<td class="border"><input ${tagIt(editable, "Middle_Name")} value="${(employee && employee.name && employee.name.middleName) || ''}" type="text" maxlength="50"></td>
		<td class="border"><input ${tagIt(editable, "Last_Name")}  value="${(employee && employee.name && employee.name.lastName) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>

		<table border="0" cellpadding="5">
		<tr>
		<td class="ar border bold">Type</td>
		<td class="border"><input ${tagIt(editable, "Type")} value="${(employee && employee.type) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">C2C Name</td>
		<td class="border"><input  ${tagIt(editable, "C2CName")} value="${(employee && employee.companyName) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Position</td></tr>
		<tr>
		<td class="ar border bold">Job Title</td>
		<td class="border"><input  ${tagIt(editable, "Job_Title")} value="${(employee && employee.jobTitle) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Pay Rate</td>
		<td class="border"><input  ${tagIt(editable, "Pay_Rate")} value="${(employee && employee.payRate) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">OT Pay</td>
		<td class="border"><input  ${tagIt(editable, "OT_Pay")} value="${(employee && employee.OTPayRate) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Bill Rate</td>
		<td class="border"><input  ${tagIt(editable, "Bill_Rate")} value="${(employee && employee.billRate) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">OT Bill</td>
		<td class="border"><input  ${tagIt(editable, "OT_Bill")} value="${(employee && employee.OTBillRate) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Dates</td></tr>
		<tr>
		<td class="ar border bold">Start Date</td>
		<td class="border"><input  ${tagIt(editable, "Start_Date")} value="${(employee && employee.startDate) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">End Date</td>
		<td class="border"><input  ${tagIt(editable, "End_Date")} value="${(employee && employee.endDate) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold center-text">Length</td>
		<td class="border"><input  ${tagIt(editable, "Length")} value="${(employee && employee.length) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Contact</td></tr>
		<tr>
		<td class="ar border bold">Email</td>
		<td class="border"><input  ${tagIt(editable, "Email")} value="${(employee && employee.email) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">Phone</td>
		<td class="border"><input  ${tagIt(editable, "Phone")} value="${(employee && employee.phone) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 1</td>
		<td class="border"><input  ${tagIt(editable, "Street_1")} value="${(employee && employee.address && employee.address.street1) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 2</td>
		<td class="border"><input  ${tagIt(editable, "Street_2")} value="${(employee && employee.address && employee.address.street2) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">City</td>
		<td class="border"><input  ${tagIt(editable, "City")} value="${(employee && employee.address && employee.address.city) || ''}" type="text" maxlength="50"></td>
		<tr>
		<td class="ar border bold">State</td>
		<td class="border"><input  ${tagIt(editable, "State")} value="${(employee && employee.address && employee.address.state) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Zip</td>
		<td class="border"><input  ${tagIt(editable, "Zip")} value="${(employee && employee.address && employee.address.zipcode) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>
		<br> 
		`;

	if (editable) {
		s += `
			<input type="submit" class="in-form-button" name="in-cancel" value="Cancel"> 
			<input type="submit" class="in-form-button" name="in-save"   value="Save"  >
			`;
	} else {
		s += `
			<input type="submit" class="in-form-button" name="in-cancel" value="Return"> 
			<input type="submit" class="in-form-button" name="in-edit" value="Edit"> 
			`;
	}////
	s += `
		</fieldset>
		</form>
		`;

	return s;
}

