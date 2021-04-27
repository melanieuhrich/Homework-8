const Intern = require ('../lib/intern');

describe('Intern class', () => {

    it('Should return a school', () => {
        const school = 'university';
        const obj = new Intern('Bob', 1, 'bob@bob.com', school);
        expect(obj.school).toEqual(school)
    })

    it('Should return a school', () => {
        const obj = new Intern('Bob', 1, 'bob@bob.com', 'school');
        expect(obj.getSchool()).toEqual('school')
    })

    it('Should return intern', () => {
        const obj = new Intern('Bob', 1, 'bob@bobo.com', 'school');
        expect(obj.getRole()).toEqual('Intern')
    })
 
})