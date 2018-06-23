'use strict';

exports.DATABASE_URL = process.env.DATABASE_URL || 
								'mongodb://localhost/nodecapdms';

exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 
								'mongodb://localhost/test-nodecapdms';

exports.PORT = process.env.PORT || 8080;
