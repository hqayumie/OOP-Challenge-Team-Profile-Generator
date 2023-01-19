const Intern = require('../lib/Intern');

//test for creating Intern object
test("Creates an Intern object", () => {
    const intern = new Intern("Heela", 1, "heela@gmail.com", "Carleton")

    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String))
    expect(intern.school).toEqual(expect.any(String))
});

// test for getName()
test('return interns name', () => {
    const intern = new Intern("Heela", 1, "heela@gmail.com", "Carleton");

    expect(intern.getName()).toEqual("Heela");
});


//test for getID()
test('return interns id', () => {
    const intern = new Intern("Heela", 1, "heela@gmail.com", "Carleton");
    expect(intern.getID()).toEqual(expect.any(Number));
});

//test for getEmail()
test('return interns email', () => {
    const intern = new Intern("Heela", 1, "heela@gmail.com", "Carleton");
    expect(intern.getEmail()).toEqual("heela@gmail.com");
});

//test for getSchool()
test('return interns school', ()=>{
    const intern= new Intern("heela", 1, "heela@gmail.com", "Carleton");
    expect(intern.getSchool()).toEqual("Calreton");
});