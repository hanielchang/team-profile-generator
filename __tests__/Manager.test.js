const Manager = require('../lib/Manager');

test('create a manager object', () => {
    const manager = new Manager("Haniel", "hanielchang@gmail.com", 1, 26);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.email).toEqual(expect.stringContaining('.'));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager("Haniel", "hanielchang@gmail.com", 1, 26);
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("gets manager's ID", () => {
    const manager = new Manager("Haniel", "hanielchang@gmail.com", 1, 26);
    expect(manager.getId()).toEqual(manager.id);
});

test("gets manager's Email", () => {
    const manager = new Manager("Haniel", "hanielchang@gmail.com", 1, 26);
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("gets manager's role", () => {
    const manager = new Manager("Haniel", "hanielchang@gmail.com", 1, 26);
    expect(manager.getRole()).toBe('Manager');
});