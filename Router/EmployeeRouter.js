// Employee Router
const say = console.log;
const express = require('express');
const router = express.Router();

const { Employee } = require('../Models/models');


// GET - all Employees  /api/employees
router.get('/', function(req, res) {
	Employee
		.find()
		.then( p=> res.json(p) )
		.catch( err=> {
			say(err);
			res.status(500).json({sig:'Internal server error'});
		});
});

// GET - one Employee	/api/employees/:id
router.get('/:id', function(req, res) {
	Employee
		.findById(req.params.id)
		.then( p=> res.json(p) )
		.catch( err=> {
			say(err);
			res.status(500).json({sig:'Internal server error'});
		});
});


// POST - one Employee at a time   /api/employees
router.post('/', function(req, res) {
	//say(req.body);
	Employee.create({
			name:	{
			  firstName: 	req.body.name.firstName,
			 middleName:	req.body.name.middleName,
				lastName: 	req.body.name.lastName
			},

					 type: 	req.body.type, 
			companyName: 	req.body.companyName,

			address: {
				 street1: 	req.body.address.street1,
				 street2: 	req.body.address.street2,
				    city:	req.body.address.city,
				   state:	req.body.address.state,
				 zipcode: 	req.body.address.zipcode
			},

			   	phone:	req.body.phone,
					email: 	req.body.email,
			  otherInfo: 	req.body.otherInfo,
				jobTitle: 	req.body.jobTitle,
				 payRate: 	req.body.payRate,
			  OTPayRate: 	req.body.OTPayRate,
				billRate: 	req.body.billRate,
			 OTBillRate: 	req.body.OTBillRate,
		  paidHolidays: 	req.body.paidHolidays,
			  startDate: 	req.body.startDate,
				 endDate: 	req.body.endDate,
				  length: 	req.body.length  
    })
	.then( post=> { 
		//say(post);
		res.status(200).json(post);
	})
	.catch( err=> { 
		say(err); 
		res.status(500).json({"error":"Post Failed."}); 
	});

});


// PUT - update one Employee	/api/employees/:id  
router.put('/:id', function(req, res) {
	// check the id
	if( !(req.params.id && req.body._id && (req.params.id === req.body._id)) ) {
		res.status(400).json({ error: "id's do not match or missing." });
	}
//	say(" id = " + req.params.id);
//	say("_id = " + req.body._id);
//	say( Object.keys(req.body));
	Employee
		.findByIdAndUpdate( req.params.id, { $set: req.body }, { new: true } )
		.then( updatedPost=> res.status(200).end() )
		.catch( err=> 	res.status(500).json({message: "Could not Update"}));
});



// DELETE - delete one Employee 	/api/employees/:id
router.delete('/:id', function(req, res) {
	Employee
		.findByIdAndRemove(req.params.id)
		.then( ()=> { res.status(204).json({"message": "success"});
		})
	.catch( err=> {
		const message = `... Missed -> ${req.params.id}`;
		console.error(err);
		res.status(500).json({"error": "something went terribly wrong"});
	});
});



//module.exports = {EmployeeRouter: router};
module.exports = {router};



