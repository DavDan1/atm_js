const { expect } = require('chai')

const Atm = require('../src/atm')

describe('Atm class', () => {
    let subject

    before(() => {
        subject = new Atm()

    });
    it('is expected to be instantiated', () => {
        expect(subject).to.be.an('object')
    });
    it('is expected to be an instance Atm', () => {
        expect(subject).to.be.instanceOf(Atm)
    });
    it('is expected to hold 1000 currency an initialize', () => {
        expect(subject.funds).to.equal(1000)
    });
    it('is expected to reduce funds on succesful withdrawl', () => {
        subject.withdraw(150)
        expect(subject.funds).to.equal(850)
    });

});