'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 
			'mongodb://dms:employee01@ds115971.mlab.com:15971/nodecapdms';
//		'mongodb://localhost/employee';

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 
			'mongodb://testdms:employee01@ds117101.mlab.com:17101/test-nodecapdms'

exports.PORT = process.env.PORT || 8080;
