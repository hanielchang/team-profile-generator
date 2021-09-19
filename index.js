// Here I am importing the prompt functions from a separate employees file,
// so that I can keep the code orderly and avoid bloated code.
const { promptEngineer, promptIntern } = require('./employees');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: nameInput => {
                if (nameInput.includes('@') && nameInput.includes('.')) {
                    return true;
                } else {
                    console.log('\nPlease enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID number.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Enter manager's office number.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid office number!');
                    return false;
                }
            }
        }
    ]);
};

const promptTeam = teamData => {
    console.log(`
  ==============================
    `);

    // If there's no 'employees' array property, create one
    if (!teamData.employees) {
        teamData.employees = [];
    }
    
    var wantsEngineer = false;

    return inquirer.prompt([
        {
            type: 'list',
            name: 'member',
            message: 'Would you like to add an Engineer or Intern?',
            choices: ['Engineer', 'Intern']
        }
    ])
        .then(selection => {
            if (selection.member === 'Engineer') {
                wantsEngineer = true;
                return promptEngineer();
            }
            else {
                return promptIntern();
            }
        })
        .then(employee => {
            if (wantsEngineer) {
                const { name, email, id, github, confirmAddAnother } = employee;
                const engineer = new Engineer(name, email, id, github);
                console.log(name + ' has been added as an engineer.');
                teamData.employees.push(engineer);
                return confirmAddAnother;
            }
            else {
                const { name, email, id, school, confirmAddAnother } = employee;
                const intern = new Intern(name, email, id, school);
                console.log(name + ' has been added as an intern.')
                teamData.employees.push(intern);
                return confirmAddAnother;
            }
        })
        .then(wantsAnother => {
            if (wantsAnother) {
                return promptTeam(teamData);
            }
            else {
                return teamData;
            }
        })
};


promptManager()
    .then(promptTeam)
    .then(teamProfile => {
        return generatePage(teamProfile);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(`
        ==============================
          `);
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });