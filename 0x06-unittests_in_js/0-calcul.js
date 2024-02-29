/*
 * Rounds off two numbers and returns their sum.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @return {number} The sum of `a` and `b`.
 */

function calculateNumber(a, b) { 
	a = Math.round(a);
	b = Math.round(b);

	return (a + b);
}

module.exports = calculateNumber;
