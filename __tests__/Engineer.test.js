const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
    const engineer = new Engineer("Haniel", "hanielchang@gmail.com", 1, 'hanielchang72');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.email).toEqual(expect.stringContaining('.'));
    expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
    const engineer = new Engineer("Haniel", "hanielchang@gmail.com", 1, 'hanielchang72');
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets engineer's ID", () => {
    const engineer = new Engineer("Haniel", "hanielchang@gmail.com", 1, 'hanielchang72');
    expect(engineer.getId()).toEqual(engineer.id);
});

test("gets engineer's Email", () => {
    const engineer = new Engineer("Haniel", "hanielchang@gmail.com", 1, 'hanielchang72');
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets engineer's role", () => {
    const engineer = new Engineer("Haniel", "hanielchang@gmail.com", 1, 'hanielchang72');
    expect(engineer.getRole()).toBe('Engineer');
});

test("gets engineer's github", () => {
    const engineer = new Engineer("Haniel", "hanielchang@gmail.com", 1, 'hanielchang72');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

