// For for POST and PUT


function createNewHireForm() {
	say("open New Hire Form");
	toggleInputFormViewPort();
	$('.js-input-form').html("");
	$('.js-input-form').append( renderInputForm(null) );
}

function displayEmployeeData(n) {
	say("displey Employee Data");
	toggleInputFormViewPort();
	$('.js-employee').html("");
	$('.js-employee').append( renderEmployeeData(empData[n]) );
}

function editEmployeeData(n) {
	say("'edit' Employee Data");
	toggleInputFormViewPort();
	$('.js-input-form').html("");
	$('.js-input-form').append( renderUpdateForm(empData[n]) );
}


function renderInputForm(employee) {
	return buildEmployeeDataForm(employee, true, false, "POST");
}

function renderUpdateForm(employee) {
	return buildEmployeeDataForm(employee, true, true, "PUT");
}
 
function renderEmployeeData(employee) {
	return buildEmployeeDataForm(employee, false, true, "");
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

function putForm() {
	say("PUTing form ...");
	let employeeData = fillEmployeeDataObject('.js-input-form > form[method="PUT"]');

	$.ajax({
		'type': "PUT",
		'url': "/api/employees",
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




function buildEmployeeDataForm(employee, editable, withData, method) {
	let s = `
		<form action="/" method="${method}" class="js-in-form" >
		<fieldset><legend>New Hire Input</legend>
		<input type="submit" class="in-form-button" name="in-cancel" value="Cancel"> 
		<input type="submit" class="in-form-button" name="in-save"   value="Save"  >
		<table border="0" cellpadding="0">
		<tr>
		<td class="ar border"></td>
		<td class="border text-lighten center-text">First</td>
		<td class="border text-lighten center-text">Middle</td>
		<td class="border text-lighten center-text">Last</td>
		</tr>
		<tr>
		<td class="ar border bold">Name</td>
		<td class="border"><input class="in-First_Name" value="${(employee && employee.name && employee.name.firstName) || ''}" type="text" maxlength="50"></td>
		<td class="border"><input class="in-Middle_Name" value="${(employee && employee.name && employee.name.middleName) || ''}" type="text" maxlength="50"></td>
		<td class="border"><input class="in-Last_Name" value="${(employee && employee.name && employee.name.lastName) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>

		<table border="0" cellpadding="5">
		<tr>
		<td class="ar border bold">Type</td>
		<td class="border"><input class="in-Type" value="${(employee && employee.type) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">C2C Name</td>
		<td class="border"><input class="in-C2CName" value="${(employee && employee.companyName) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Position</td></tr>
		<tr>
		<td class="ar border bold">Job Title</td>
		<td class="border"><input class="in-Job_Title" value="${(employee && employee.jobTitle) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Pay Rate</td>
		<td class="border"><input class="in-Pay_Rate" value="${(employee && employee.payRate) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">OT Pay</td>
		<td class="border"><input class="in_OT_Pay" value="${(employee && employee.OTPayRate) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Bill Rate</td>
		<td class="border"><input class="in-Bill_Rate" value="${(employee && employee.billRate) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">OT Bill</td>
		<td class="border"><input class="in-OT_Bill" value="${(employee && employee.OTBillRate) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Dates</td></tr>
		<tr>
		<td class="ar border bold">Start Date</td>
		<td class="border"><input class="in-Start_Date" value="${(employee && employee.startDate) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">End Date</td>
		<td class="border"><input class="in-End_Date" value="${(employee && employee.endDate) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold center-text">Length</td>
		<td class="border"><input class="in-Length" value="${(employee && employee.length) || ''}" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Contact</td></tr>
		<tr>
		<td class="ar border bold">Email</td>
		<td class="border"><input class="in-Email" value="${(employee && employee.email) || ''}" type="text" maxlength="50"></td>
		<td class="ar border bold">Phone</td>
		<td class="border"><input class="in-Phone" value="${(employee && employee.phone) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 1</td>
		<td class="border"><input class="in-Street_1"  value="${(employee && employee.address && employee.address.street1) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 2</td>
		<td class="border"><input class="in-Street_2"  value="${(employee && employee.address && employee.address.street2) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">City</td>
		<td class="border"><input class="in-City"  value="${(employee && employee.address && employee.address.city) || ''}" type="text" maxlength="50"></td>
		<tr>
		<td class="ar border bold">State</td>
		<td class="border"><input class="in-State"  value="${(employee && employee.address && employee.address.state) || ''}" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Zip</td>
		<td class="border"><input class="in-Zip"  value="${(employee && employee.address && employee.address.zipcode) || ''}" type="text" maxlength="50"></td>
		</tr>


		</table>
		<br> 
		<input type="submit" class="in-form-button" name="in-cancel" value="Cancel"> 
		<input type="submit" class="in-form-button" name="in-save"   value="Save"  >
		</fieldset>
		</form>

		`;
	return s;
}

