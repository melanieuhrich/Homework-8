const Manager = require ('../lib/manager');

describe('Manager class', () => {

    it('Should return an office number', () => {
        const officeNumber = '123';
        const obj = new Manager('Bob', 1, 'bob@bob.com', officeNumber);
        expect(obj.officeNumber).toEqual(officeNumber)
    })

    it('Should return an office number', () => {
        const obj = new Manager('Bob', 1, 'bob@bob.com', 123); 
        expect(obj.getOfficeNumber()).toEqual(123) 
    })

    it('Should return manager', () => {
        const obj = new Manager('Bob', 1, 'bob@bob.com', 123); 
        expect(obj.getRole()).toEqual('Manager')
    })
    
})