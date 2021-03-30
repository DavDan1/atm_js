const { expecty } = require('chai')

const Atm = require('../src/atm')

describe('Atm class', () => {
    let subject

    before(() =>{
        subject =new Atm()
        
    });
    it('is expected to be instantiated', () => {
        expect(subject).to.be.an('object')
    });
    it('is expected to be an instance Atm', () => {
        expect(subject).to.be.instanceOf(Atm)
    });

});