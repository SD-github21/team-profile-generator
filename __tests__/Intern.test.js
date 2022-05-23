const Intern = require('../lib/Intern.js');

test('creates an intern child object', () => {
    const intern = new Intern('Sally', 2, 'sally@gmail.com', 'Intern', '2University');

    expect(intern.name).toBe('Sally');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('com'));

    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);
    expect(intern.getEmail()).toEqual(intern.email);

    expect(intern.getRole()).toEqual('Intern');

    expect(intern.school).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(intern.school);
});