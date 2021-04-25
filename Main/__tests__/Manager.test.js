const Manager = require ('../lib/manager');

describe('Manager class', () => {
    it('Should return an office number', () => {
        const officeNumber = '123';
        const obj = new Manager('Bob', 1, 'bob@bob.com', officeNumber);
        expect(obj.officeNumber).toEqual(officeNumber)
    })
    
})