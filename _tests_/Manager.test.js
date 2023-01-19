const Manager = require('../lib/manager');

//test for creating Manager object
test("Creates a Manager object", () => {
    const manager = new Manager("Heela", 1, "heela@gmail.com", 22)

    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String))
    expect(manager.officeNumber).toEqual(expect.any(String))
});

// test for getName()
test('return managers name', () => {
    const manager = new Manager("Heela", 1, "heela@gmail.com", 22)

    expect(manager.getName()).toEqual(expect.any(String))
});


//test for getID()
test('return managers id', () => {
    const manager = new Manager("Heela", 1, "heela@gmail.com", 22)
    expect(manager.getID()).toEqual(expect.any(Number))
});

//test for getEmail()
test('return managers email', () => {
    const manager = new Manager("Heela", 1, "heela@gmail.com", 22)
    expect(manager.getEmail()).toEqual(expect.any(String))
});

//test for getOfficeNumber()
test('return managers office number', ()=>{
    const manager= new Manager("heela", 1, "heela@gmail.com", 22)
    expect(manager.getSchool()).toEqual(expect.any(String))
});