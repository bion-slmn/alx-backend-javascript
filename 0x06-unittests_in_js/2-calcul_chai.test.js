const { expect } = require('chai');
calculateNumber = require('./2-calcul_chai');

describe('claculateNumber with SUM', function () {

	it('working with whole positive numbers', function() {
		expect(calculateNumber('SUM', 1, 4)).to.equal(5);
		expect(calculateNumber('SUM', 10, 40)).to.equal(50);
	});
	it('working with floating  positive numbers', function() {
		expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		expect(calculateNumber('SUM', 1.1, 4.6)).to.equal(6);
	});
	it('working with whole negative numbers', function() {
		expect(calculateNumber('SUM', -1, -4)).to.equal(-5);
		expect(calculateNumber('SUM', -1, 4)).to.equal(3);
	});
	it('working with floating negative numbers', function() {
                expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
                expect(calculateNumber('SUM', 1.1, -4.6)).to.equal(-4);
	});

});

describe('claculateNumber with SUBTRACT TYPE', function () {

        it('working with whole positive numbers', function() {
                expect(calculateNumber('SUBTRACT', 1, 4)).to.equal(-3);
                expect(calculateNumber('SUBTRACT', 50, 40)).to.equal(10);
        });
        it('working with floating  positive numbers', function() {
                expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
                expect(calculateNumber('SUBTRACT', 1.1, 4.6)).to.equal(-4);
        });
        it('working with whole negative numbers', function() {
                expect(calculateNumber('SUBTRACT', -1, -4)).to.equal(3);
                expect(calculateNumber('SUBTRACT', -1, 4)).to.equal(-5);
        });
        it('working with floating negative numbers', function() {
                expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
                expect(calculateNumber('SUBTRACT', 1.1, -4.6)).to.equal(6);
        });
});

describe('claculateNumber with DIVIDE', function () {
        it('working with whole positive numbers', function() {
                expect(calculateNumber('DIVIDE', 1, 4)).to.equal(0.25);
                expect(calculateNumber('DIVIDE', 10, 40)).to.equal(0.25);
        });
        it('working with floating  positive numbers', function() {
                expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
                expect(calculateNumber('DIVIDE', 1.1, 4.6)).to.equal(0.2);
        });
        it('working with whole negative numbers', function() {
                expect(calculateNumber('DIVIDE', -1, -4)).to.equal(0.25);
                expect(calculateNumber('DIVIDE', -1, 4)).to.equal( -0.25);
        });
        it('working with floating negative numbers', function() {
                expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal( 0.25);
                expect(calculateNumber('DIVIDE', 1.1, -4.6)).to.equal(-0.2);
        });

	it('working with floating numbers that roundoff to 0', function() {
                expect(calculateNumber('DIVIDE', 0.4, 4.5)).to.equal(0);
                expect(calculateNumber('DIVIDE', 1.1, 0.4)).to.equal('Error');
        });

	it('working witth unknown type to 0', function() {
                expect(calculateNumber('NOFUNCTION', 0.4, 4.5)).to.equal(undefined);
                expect(calculateNumber('NONFUNCTION', 1.1, 0.4)).to.equal(undefined);
        });
});
