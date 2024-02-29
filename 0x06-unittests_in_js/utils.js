const Utils = {

	calculateNumber : (type, a, b) => {
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
}

module.exports = Utils;
