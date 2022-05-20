const Employee = require('../lib/Employee.js');

test('creates an employee class', () => {
    const employee = new Employee('Jarred', 1, 'jarred@gmail.com');

    expect(employee.name).toBe('Jarred');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('com'));

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
});