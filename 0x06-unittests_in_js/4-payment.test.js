const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi calls console.log with the right arguments', () => {
    const mighty = sinon.spy(console);
    const betty = sinon.stub(Utils, 'calculateNumber');

    betty.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(betty.calledWith('SUM', 100, 20)).to.be.true;
    expect(betty.callCount).to.be.equal(1);
    expect(mighty.log.calledWith('The total is: 10')).to.be.true;
    expect(mighty.log.callCount).to.be.equal(1);
    betty.restore();
    mighty.log.restore();
  });
});
