
const say = console.log;
const express = require('express');
const router = express.Router();


router.get('/:firstName', function(req, res) {
		// Headers
		// req.body.*
		// req.query.*
		// req.params.*
	
		let a = req.params.firstName;
		say("FIRST: " + a);
		res.status(200).json( req.query );
});




module.exports = {router};


//
//  /test?firstName=value1&lastName=value2
//
//
//
//
//
