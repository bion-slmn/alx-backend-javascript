/*
 * Rounds off two numbers and returns their sum.
 *
 * @param {number} a - The first number to be added.
 * @param {number} b - The second number to be added.
 * @param {function} type - the function to pass the params
 * @return {number} The sum/subtract/divide of `a` and `b`.
 */

function calculateNumber(type, a, b) { 
	a = Math.round(a);
	b = Math.round(b);

	const operations = {
        'SUM': (a, b) => a + b,
        'SUBTRACT': (a, b) => a - b,
        'DIVIDE': (a, b) => {
            if (b === 0) return 'Error';
            return a / b;
        }}

	if (operations.hasOwnProperty(type)){
		return operations[type](a, b);
	}
	
}

module.exports = calculateNumber;
