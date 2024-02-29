const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment.js');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  // Create a spy on the calculateNumber function of the Utils module
  const calc = sinon.spy(Utils, 'calculateNumber');

  // Call the function you want to test (sendPaymentRequestToApi)
  sendPaymentRequestToApi(100, 20);

  // Restore the original calculateNumber function
  calc.restore();

  // Assert that the calculateNumber function was called exactly once
  it('should call calculateNumber once', function() {
    sinon.assert.calledOnce(calc);
  });

  // Assert that the calculateNumber function was called with the correct arguments
  it('should call calculateNumber with the correct arguments', function() {
    sinon.assert.calledWithExactly(calc, 'SUM', 100, 20);
  });
});

