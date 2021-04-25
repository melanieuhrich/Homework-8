const Employee = require ('../lib/employee');

describe('Employee class', () => {
    it('Should return a name', () => {
        const name = 'Bob';
        const obj = new Employee(name, 1, 'bob@bob.com');
        expect(obj.name).toEqual(name)
    })

    it('Should return an id', () => {
        const id = '1';
        const obj = new Employee('Bob', id, 'bob@bob.com')
        expect(obj.id).toEqual(id)
    })

    it('Should return an email', () => {
        const email = 'bob@bob.com';
        const obj = new Employee('Bob', 1, email);
        expect(obj.email).toEqual(email)
    })
    
})
