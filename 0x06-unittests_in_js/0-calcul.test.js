/*
 * testing the calcluate number usig mocha
 * *
 */
const assert = require("assert");
calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function(){
  
  it('calculating the sum offloating  numbers', function(){
	  assert.equal(calculateNumber(1, 3.7), 5);
	  assert.equal(calculateNumber(1.2, 3.7), 5);
	  assert.equal(calculateNumber(1.8, 3.7), 6);
	  assert.equal(calculateNumber(1, -3.1), -2);
  });
	it('calculating the sum of whole numbers', function(){
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(10, 30), 40);
  });

	it('calculating the sum of negative numbers', function(){
    assert.equal(calculateNumber(-1, 3), 2);
    assert.equal(calculateNumber(-10, -30), -40);
  });
	it('calculating the sum of getting non results  numbers', function(){
    assert.notEqual(calculateNumber(1, 3), 5);
    assert.notEqual(calculateNumber(10, 30), 410);
  });
	it('calculating the sum of of args that arent numbers', function(){
		assert(isNaN(calculateNumber(1.2, 'bon')));
          assert(isNaN(calculateNumber(1.2)));
          assert(isNaN(calculateNumber()));
          assert(isNaN(calculateNumber(1.2, [1, 2])));
          assert(isNaN(calculateNumber('d', 'bon')));
  });
	 it('calculating the sum of boolean', function(){
    assert.equal(calculateNumber(false, true), 1);
          assert.equal(calculateNumber(true, true), 2);
  });
});
