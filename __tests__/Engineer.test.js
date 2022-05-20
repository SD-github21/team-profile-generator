const Engineer = require('../lib/Engineer.js');

test('creates an engineer child object', () => {
    const engineer = new Engineer('Sally', 2, 'sally@gmail.com', 'Engineer', 25);

    expect(engineer.name).toBe('Sally');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('com'));

    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);
    expect(engineer.getEmail()).toEqual(engineer.email);

    expect(engineer.getRole()).toEqual('Engineer');

    expect(engineer.gitHub).toEqual(engineer.gitHub);
});
