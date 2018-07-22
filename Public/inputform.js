// For for POST


function createNewHireForm() {
	say("open New Hire Form");
	toggleInputFormViewPort();
	$('.js-input-form').html("");
	$('.js-input-form').append( renderInputForm() );
}

function postForm() {
	say("POSTing form ...");
	let employeeData = {
		"name": {
			"firstName":  $('.in-First_Name').val(), 
			"middleName": $('.in-Middle_Name').val(),
			"lastName":   $('.in-Last_Name').val()
		},
		"type":        $('.in-Type').val(),
		"companyName": $('.in-C2CName').val(),
		"address": {
			"street1": $('.in-Street_1').val(),
			"street2": $('.in-Street_2').val(),
			"city":    $('.in-City').val(),
			"state":   $('.in-State').val(),
			"zipcode": $('.in-Zip').val()
		},
		"phone": $('.in-Phone').val(),
		"email": $('.in-Email').val(),
		"otherInfo": "",
		"jobTitle":   $('.in-Job_Title').val(),
		"payRate":    $('.in-Pay_Rate').val(),
		"OTPayRate":  $('.in-OT_Pay').val(),
		"billRate":   $('.in-Bill_Rate').val(),
		"OTBillRate": $('.in-OT_Bill').val(),
		"startDate":  $('.in-Start_Date').val(),
		"endDate":    $('.in-End_Date').val(),
		"length":     $('.in-Length').val()
	};

/*
	$.post("/api/employees", employeeData, function(d,t,x) {
		say("Post Successful");
	}).fail(function(d,t,x) {
		say("Post Failed");
	});
*/

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
	
	say(employeeData);

}

function renderInputForm() {
	let s = `
		<form action="/" method="POST" class="js-in-form">
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
		<td class="border"><input class="in-Type" type="text" maxlength="50"></td>
		<td class="ar border bold">C2C Name</td>
		<td class="border"><input class="in-C2CName" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Position</td></tr>
		<tr>
		<td class="ar border bold">Job Title</td>
		<td class="border"><input class="in-Job_Title" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Pay Rate</td>
		<td class="border"><input class="in-Pay_Rate" type="text" maxlength="50"></td>
		<td class="ar border bold">OT Pay</td>
		<td class="border"><input class="in_OT_Pay" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Bill Rate</td>
		<td class="border"><input class="in-Bill_Rate" type="text" maxlength="50"></td>
		<td class="ar border bold">OT Bill</td>
		<td class="border"><input class="in-OT_Bill" type="text" maxlength="50"></td>
		</tr>
		</table>
		<table border="0" cellpadding="0">
		<tr><td>Dates</td></tr>
		<tr>
		<td class="ar border bold">Start Date</td>
		<td class="border"><input class="in-Start_Date" type="text" maxlength="50"></td>
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
		<td class="border"><input class="in-Email" type="text" maxlength="50"></td>
		<td class="ar border bold">Phone</td>
		<td class="border"><input class="in-Phone" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 1</td>
		<td class="border"><input class="in-Street_1" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Street 2</td>
		<td class="border"><input class="in-Street_2" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">City</td>
		<td class="border"><input class="in-City" type="text" maxlength="50"></td>
		<tr>
		<td class="ar border bold">State</td>
		<td class="border"><input class="in-State" type="text" maxlength="50"></td>
		</tr>
		<tr>
		<td class="ar border bold">Zip</td>
		<td class="border"><input class="in-Zip" type="text" maxlength="50"></td>
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

