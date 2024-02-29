const expect = require('chai').expect;
const request = require('request')


describe('testesing an express app', function(){

	const url = 'http://localhost:7865';
	const urlCart = 'http://localhost:7865/cart/12';
	const urlstring = 'http://localhost:7865/cart/bon';
	it('test the status code', function(done){
	  request(url, (error, response, body) => {
	  expect(response.statusCode).to.equal(200);
	  expect(response.statusCode).to.not.equal(300);
	  expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
	expect(body).to.equal('Welcome to the payment system');
		 done();
	if (error) {
	done(error);
	return;
	}
	  });	 
	});

	it('test card route with a number', function(done){
        request(urlCart, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
	expect(response.headers['content-type']).to.equal('text/html; charset=utf-8');
        expect(body).to.equal('Payment methods for cart 12');
        done();
        })});

	it('test card route with a number', function(done){
        request(urlstring, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
        if (error) {done(error)}
        })
        });

});
