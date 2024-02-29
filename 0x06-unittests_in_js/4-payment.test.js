const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment.js');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  // Create a stub on the calculateNumber function of the Utils module
  const stub = sinon.stub(Utils, 'calculateNumber');
 stub.returns(10);
	const spy = sinon.spy(console, 'log');
  sendPaymentRequestToApi(100, 20);

  stub.resetBehavior();

  it('console.log return 10', function() {
    sinon.assert.calledWith(spy, 'The total is: 10');
	  spy.restore();
  });

  it('should call calculateNumber with the correct arguments', function() {
    sinon.assert.calledWithExactly(stub, 'SUM', 100, 20);
  });
});

