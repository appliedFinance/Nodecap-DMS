
let MOCK_EMPLOYEED_DATA {
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
		"startDate": 01.01.2000,
		"endDate": 01.02.2000,
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
		"startDate": 05.01.2010,
		"endDate": ,
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
		"startDate": 03.03.2015,
		"endDate": ,
		"length": "6 mo"
	}
	]
};

function getRecentStatusUpdates(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_STATUS_UPDATES)}, 100);
}

// this function stays the same when we connect
// to real API later
function displayStatusUpdates(data) {
    for (index in data.statusUpdates) {
       $('body').append(
        '<p>' + data.statusUpdates[index].text + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayStatusUpdates() {
    getRecentStatusUpdates(displayStatusUpdates);
}

$(function() {
    getAndDisplayStatusUpdates();
});



