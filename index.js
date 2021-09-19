// Here I am importing the prompt functions from a separate members file,
// so that I can keep the code orderly and avoid bloated code.
const { promptEngineer, promptIntern } = require('./members');
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

    // If there's no 'members' array property, create one
    if (!teamData.members) {
        teamData.members = [];
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
                console.log('You added an engineer.');
                const {name, email, id, github, confirmAddAnother} = employee;
                const engineer = new Engineer(name, email, id, github);
                teamData.members.push(engineer);
                return confirmAddAnother;
            }
            else {
                console.log('You added an intern.') 
                const {name, email, id, school, confirmAddAnother} = employee;
                const intern = new Intern(name, email, id, school);
                teamData.members.push(intern);
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
        console.log('Here is your team profile!');
        console.log(teamProfile);
    })