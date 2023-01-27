generateHTML = require('./source/generateHTML');
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
//const path = require('path');
const fs = require('fs');


//array to hold team members
const teamMembers = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the managers name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the manager's name!");
          return false;
        }
      }
    },
    {
      type: "input",
      name: "employeeId",
      message: "What is your managers ID number?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the manager's ID!")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "email",
      message: "What is the managers email address?",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the managers office number?",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log('Please enter an office number!')
          return false;
        } else {
          return true;
        }
      }
    }

  ])
    .then(managerInput => {
      const { name, employeeId, email, officeNumber } = managerInput;
      const manager = new Manager(name, employeeId, email, officeNumber);
      teamMembers.push(manager);
      console.log(manager);
    })
};

const addEmployee = () => {
  console.log(`Adding an employee`);
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Please choose the employees role',
      choices: ['Engineer', 'Intern', 'Finished adding team members']
    },
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the employee?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter an employee's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Please enter the employee's ID.",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log("Please enter the employee's ID!")
          return false;
        } else {
          return true;
        }
      },
    },

    {
      type: 'input',
      name: 'email',
      message: "Please enter the employee's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log('Please enter an email!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the employee's github username.",
      when: (input) => input.role === "Engineer",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the employee's github username!")
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the intern's school",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the intern's school!")
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default: false
    }
  ])
    .then(employeeData => {
      let { name, employeeID, email, role, github, school, confirmAddmployee } = employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, employeeId, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, employeeId, email, school);

        console.log(employee);
      }
      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    })

};

//function to generate hmtl page for employee's
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Your team profile has been successfully created! Please check out the index.html")
      }
  })
}; 
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
