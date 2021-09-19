const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee("Haniel", "hanielchang@gmail.com", 1);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.stringContaining('@'));
    expect(employee.email).toEqual(expect.stringContaining('.'));
});

test("gets employee's name", () => {
    const employee = new Employee("Haniel", "hanielchang@gmail.com", 1);
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets employee's ID", () => {
    const employee = new Employee("Haniel", "hanielchang@gmail.com", 1);
    expect(employee.getId()).toEqual(employee.id);
});

test("gets employee's Email", () => {
    const employee = new Employee("Haniel", "hanielchang@gmail.com", 1);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets employee's role", () => {
    const employee = new Employee("Haniel", "hanielchang@gmail.com", 1);
    expect(employee.getRole()).toBe('Employee');
});