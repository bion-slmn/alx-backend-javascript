const getPaymentTokenFromAPI = require('./6-payment_token.js');
const expect = require('chai').expect;

describe('async tests ', function() {

	it('test the result of the function', function(done){
	getPaymentTokenFromAPI(true).
	then((results) => {
	  expect(results).to.deep.equal({data: 'Successful response from the API' });
	done();
	}).
	catch(err => done(err));
	});
});
