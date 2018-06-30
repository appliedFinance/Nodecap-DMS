
let MOCK_EMPLOYEED_DATA = {
	"empolyees": [
	{
		"_id": "11111",
		"name": {
			"firstName": "Tom",
			"middleName": "A",
			"lastName": "Jones"
		},
		"type": "W2",
		"address": {
			"street1": "123 Apple Street",
			"city": "Marietta",
			"state": "GA",
			"zipcode": "30068"
		},
		"phone": "(770) 111-3333",
		"email": "tom@yahoo.com",
		"otherInfo": "",
		"payRate": "20.00",
		"OTPayRate": "30.00",
		"billRate": "25.00",
		"OTBillRate": "32.0",
		"paidHolidays": "no",
//		"startDate": ,
//		"endDate": ,
		"length": "3 mo"
	},
	{
		"_id": "22222",
		"name": {
			"firstName": "Buffy",
			"middleName": "",
			"lastName": "Summers"
		},
		"type": "W2",
		"address": {
			"street1": "123 Side Road",
			"city": "Sunnyville",
			"state": "CA",
			"zipcode": "90202"
		},
		"phone": "(770) 555-8888",
		"email": "bsum@gmail.com",
		"otherInfo": "",
		"payRate": "30.00",
		"OTPayRate": "40.00",
		"billRate": "35.00",
		"OTBillRate": "42.0",
		"paidHolidays": "no",
//		"startDate": ,
//		"endDate": ,
		"length": "open"
	},
	{
		"_id": "33333",
		"name": {
			"firstName": "Yog",
			"middleName": "So",
			"lastName": "Thoth"
		},
		"type": "W2",
		"address": {
			"street1": "999 Main Streen",
			"city": "St. Louis",
			"state": "MI",
			"zipcode": "48820"
		},
		"phone": "(770) 222-0000",
		"email": "iamyog@hotmail.com",
		"otherInfo": "",
		"payRate": "50.00",
		"OTPayRate": "75.00",
		"billRate": "99.00",
		"OTBillRate": "99.0",
		"paidHolidays": "no",
//		"startDate": ,
//		"endDate": ,
		"length": "6 mo"
	}
	]
};

function getRecentStatusUpdates(callbackFn) {
	setTimeout(function(){ callbackFn(MOCK_EMPLOYEED_DATA)}, 100);
}

function displayStatusUpdates(data) {
	for (index in data) {
		$('.output').append(
				'<p>' + data[index].text + '</p>');
	}
}


function watcher() {

	console.log("Starting:");

	$('form').submit(event=>{ 
		event.preventDefault();
		$('.output').html("HI");
		let line= $('input[type="text"]').val();
		// Some basic error checking of the input line:
		peeps = line.split(/[;,]+/);
		peeps = peeps.filter(Boolean); // remove newlines & spaces
		peeps = Array.from(new Set(peeps)); // remove duplicates
		displayStatusUpdates(MOCK_EMPLOYEED_DATA);
	});
}

$(watcher);
