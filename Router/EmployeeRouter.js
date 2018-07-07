// Employee Router
const express = require('express');
const router = express.Router();



// GET - all Employees  /api/employees
router.get('/', function(req, res) {

});

// GET - one Employee	/api/employees/:id

router.get('/:id', function(req, res) {

});


// POST - one Employee at a time   /api/employees
router.post('/', function(req, res) {

});


// PUT - update one Employee	/api/employees/:id  
router.put('/:id', function(req, res) {

});


// DELETE - delete one Employee 	/api/employees/:id
router.delete('/:id', function(req, res) {

});



//module.exports = {EmployeeRouter: router};
module.exports = {router};



