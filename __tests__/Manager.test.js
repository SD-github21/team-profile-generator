const Manager = require('../lib/Manager.js');

test('creates a manager child object', () => {
    const manager = new Manager('Sally', 2, 'sally@gmail.com', 'Manager', 25);

    expect(manager.name).toBe('Sally');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('com'));

    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);
    expect(manager.getEmail()).toEqual(manager.email);

    expect(manager.getRole()).toEqual('Manager');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});