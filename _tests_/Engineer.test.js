const Engineer = require('../lib/engineer');

//test for creating Engineer object
test("Creates an engineer object", () => {
    const engineer = new Engineer("Heela", 1, "heela@gmail.com","hqayumie");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// test for getName()
test('return engineers name', () => {
    const engineer = new Engineer("Heela", 1, "heela@gmail.com","hqayumie");
    

    expect(engineer.getName()).toEqual("Heela");
});


//test for getID()
test('return engineers id', () => {
    const engineer = new Engineer("Heela", 1, "heela@gmail.com", "hqayumie")
    expect(engineer.getID()).toEqual('1');
});

//test for getEmail()
test('return engineers email', () => {
    const engineer = new Engineer("Heela", 1, "heela@gmail.com")
    expect(engineer.getEmail()).toEqual('heela@gmail.com');
});