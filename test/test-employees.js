chai = require('chai');
const chaiHttp = require('chai-http');


const {app, runServer, closeServer} = require('../server');
const { PORT, TEST_DATABASE_URL } = require('../config');
const {generateRandomEmployee} = require('./fakeemployee');

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

	});//POST

	describe('DELETE Route', function() {
	}

	describe('PUT Route', function() {
		it('Should update items on PUT', function() {
			const emp = generateRandomEmployee();
			return chai.request(app)
				.get('/api/employees')
				.set("contentType", "application/json")
				.then( function(res) {
					emp._id = res.body[0]._id;

					return chai.request(app)
						.put(`/api/employees/${emp._id}`)
						.set("contentType", "application/json")
						.send(emp);
				})
			// prove PUT has right status code
			.then( function(res) {
				expect(res).to.have.status(200);
				//expect(res).to.be.json;
				expect(res.body).to.be.a('object');
				//expect(res.body).to.deep.equal(emp);
			});

		});//it
	});//PUT

});

