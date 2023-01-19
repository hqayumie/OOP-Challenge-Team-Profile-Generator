const Employee = require("../lib/employee");

// test for creating of Employee object
test("Creates an employee object", () => {
    const employee = new Employee("Heela", 1, "heela@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test for getName()
test('return employees name', () => {
    const employee = new Employee("Heela", 1, "heela@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
});


//test for getID()
test('return employees id', () => {
    const employee = new Employee("Heela", 1, "heela@gmail.com");
    expect(employye.getID()).toEqual(expect.any(Number));
});

test('return employees email', () => {
    const employee = new Employee("Heela", 1, "heela@gmail.com");
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

//test for getRole()
test ('get role of employee', () =>{
    const employee = new Employee("Heela", 1, "heela@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
});