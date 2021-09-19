const Intern = require('../lib/Intern');

test('create an intern object', () => {
    const intern = new Intern("Haniel", "hanielchang@gmail.com", 1, 'UCSB');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.email).toEqual(expect.stringContaining('.'));
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern("Haniel", "hanielchang@gmail.com", 1, 'UCSB');
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("gets intern's ID", () => {
    const intern = new Intern("Haniel", "hanielchang@gmail.com", 1, 'UCSB');
    expect(intern.getId()).toEqual(intern.id);
});

test("gets intern's Email", () => {
    const intern = new Intern("Haniel", "hanielchang@gmail.com", 1, 'UCSB');
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets intern's role", () => {
    const intern = new Intern("Haniel", "hanielchang@gmail.com", 1, 'UCSB');
    expect(intern.getRole()).toBe('Intern');
});

test("gets intern's school", () => {
    const intern = new Intern("Haniel", "hanielchang@gmail.com", 1, 'UCSB');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

