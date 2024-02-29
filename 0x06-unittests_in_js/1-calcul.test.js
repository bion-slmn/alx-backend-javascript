const assert = require("assert");
calculateNumber = require('./1-calcul.js');

describe('claculateNumber with SUM', function () {

	it('working with whole positive numbers', function() {
		assert.equal(calculateNumber('SUM', 1, 4), 5);
		assert.equal(calculateNumber('SUM', 10, 40), 50);
	});
	it('working with floating  positive numbers', function() {
		assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
		assert.equal(calculateNumber('SUM', 1.1, 4.6), 6);
	});
	it('working with whole negative numbers', function() {
		assert.equal(calculateNumber('SUM', -1, -4), -5);
		assert.equal(calculateNumber('SUM', -1, 4), 3);
	});
	it('working with floating negative numbers', function() {
                assert.equal(calculateNumber('SUM', -1.4, -4.5), -5);
                assert.equal(calculateNumber('SUM', 1.1, -4.6), -4);
	});

});

describe('claculateNumber with SUBTRACT TYPE', function () {

        it('working with whole positive numbers', function() {
                assert.equal(calculateNumber('SUBTRACT', 1, 4), -3);
                assert.equal(calculateNumber('SUBTRACT', 50, 40), 10);
        });
        it('working with floating  positive numbers', function() {
                assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
                assert.equal(calculateNumber('SUBTRACT', 1.1, 4.6), -4);
        });
        it('working with whole negative numbers', function() {
                assert.equal(calculateNumber('SUBTRACT', -1, -4), 3);
                assert.equal(calculateNumber('SUBTRACT', -1, 4), -5);
        });
        it('working with floating negative numbers', function() {
                assert.equal(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
                assert.equal(calculateNumber('SUBTRACT', 1.1, -4.6), 6);
        });
});

describe('claculateNumber with DIVIDE', function () {
        it('working with whole positive numbers', function() {
                assert.equal(calculateNumber('DIVIDE', 1, 4), 0.25);
                assert.equal(calculateNumber('DIVIDE', 10, 40), 0.25);
        });
        it('working with floating  positive numbers', function() {
                assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
                assert.equal(calculateNumber('DIVIDE', 1.1, 4.6), 0.2);
        });
        it('working with whole negative numbers', function() {
                assert.equal(calculateNumber('DIVIDE', -1, -4), 0.25);
                assert.equal(calculateNumber('DIVIDE', -1, 4), -0.25);
        });
        it('working with floating negative numbers', function() {
                assert.equal(calculateNumber('DIVIDE', -1.4, -4.5), 0.25);
                assert.equal(calculateNumber('DIVIDE', 1.1, -4.6), -0.2);
        });

	it('working with floating numbers that roundoff to 0', function() {
                assert.equal(calculateNumber('DIVIDE', 0.4, 4.5), 0);
                assert.equal(calculateNumber('DIVIDE', 1.1, 0.4), 'Error');
        });

	it('working witth unknown type to 0', function() {
                assert.equal(calculateNumber('NOFUNCTION', 0.4, 4.5), undefined);
                assert.equal(calculateNumber('NONFUNCTION', 1.1, 0.4), undefined);
        });
});
