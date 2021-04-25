const Engineer = require ('../lib/engineer');

describe('Engineer class', () => {
    it('Should return a GitHub username', () => {
        const github = 'github.com/bob';
        const obj = new Engineer('Bob', 1, 'bob@bob.com', github);
        expect(obj.github).toEqual(github)
    })
 
})