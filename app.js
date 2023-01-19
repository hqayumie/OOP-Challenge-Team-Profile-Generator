const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

//array to hold team members
const teamMembers = [];

function init() {
    console.log("Welcome to Team Profile Generator! Build your team :");
    managerPrompt();
}

function managerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the managers name?",
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your managers ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the managers email address?"
          },
          {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?"
          }
        
    ])
.then(answers => {
        console.log(answers);
        const manager = new Manager (answers.name, answers.emloyeeID, answers.officeNumber);
        teamMembers.push(manager);
        teamMenu();
    });
}

function teamMenu (){
    inquirer.prompt ([
        {
            type: 'list',
            name: 'addTeamMemeberPrompt',
            message: 'Add an Engineer or Intern to your team',
            choices: ['Engineer', 'Intern', 'Finished adding team members']

        }
    ])
    .then(function (userInput){
        switch(userInput.addTeamMemberPrompt){
            case 'add an engineer':
                addEngineer();
                break;
                case 'add intern':
                addIntern();
                break;

                default:
                    generateTeam();
        }
    })
}

function addEngineer() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
      },

      {
        type: "input",
        name: "employeeId",
        message: "What is the engineer's employee ID number?" 
      },

      {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
      },

      {
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github);
      teamMembers.push(engineer);
      teamMenu();
    });

  }
  function addIntern() {
    inquirer.prompt([
      
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
      },

      {
        type: "input",
        name: "employeeId",
        message: "What is the intern's employee ID?" 
      },

      {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
      },

      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?"
      }

    ]).then(answers => {
      const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
      teamMembers.push(intern);
      teamMenu();
    });
}

function generateTeam () {
    console.log ("Success!")
    fs.writeFileSync(outputPath, generateTeam(teamMembers), "utf-8")
}

generateTeam()

init();