chai = require('chai');
const chaiHttp = require('chai-http');


const {app, runServer, closeServer} = require('../server');
const { PORT, TEST_DATABASE_URL } = require('../config');
const {generateRandomEmployee} = require('../fakeemployee');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Employee API', function() {

	// BEFORE
	before(function() {
		return runServer(TEST_DATABASE_URL); // Use TEST DB
	});

	// AFTER
	after(function() {
		return closeServer();
	});



	describe('POST Route', function() {

		it('Should create new employee', function() {
			const emp = generateRandomEmployee();
			return chai.request(app)
				.post('/api/employees')
				.send( emp )
				.then(function(res) {
					expect(res).to.have.status(200);
					expect(res).to.be.json;
					expect(res.body).to.include.keys(Object.keys(emp));
				});
		});


	});

});

