chai = require('chai');
const chaiHttp = require('chai-http');


const {app, runServer, closeServer} = require('../server');
const { PORT, TEST_DATABASE_URL } = require('../config');

const expect = chai.expect;

chai.use(chaiHttp);

describe('Users', function() {
	
	// BEFORE
	before(function() {
		return runServer(TEST_DATABASE_URL); // Use TEST DB
	});
	
	// AFTER
	after(function() {
		return closeServer();
	});


	// TEST 1 - check for status 200.  Basically, a helloworld.
	it('should list users on GET', function() {
		return chai.request(app)
			.get('/')
			.then(function(res) {
				expect(res).to.have.status(200);
				expect(res).to.be.json;
			});
	});

});

