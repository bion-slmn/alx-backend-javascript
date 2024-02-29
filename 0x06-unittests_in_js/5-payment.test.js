const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment.js');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function() {
  // Create a stub on the calculateNumber function of the Utils module
  let spy;
  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function() {
   spy.restore();
  });

  it('console.log return 120', function() {
	sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWithExactly(spy, 'The total is: 120');
   sinon.assert.calledOnce(spy);
  });

  it('should call calculateNumber with the correct arguments', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(spy);
    sinon.assert.calledWithExactly(spy, 'The total is: 20');
  });
});

