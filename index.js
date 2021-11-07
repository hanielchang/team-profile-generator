// Here I am importing the prompt functions from a separate employees.js file,
// along with a write function to write the index.html file, as well
// a copy function to copy the style.css sheet to the 'dist' folder
const { promptEngineer, promptIntern } = require('./employees');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const generatePage = require('./src/page-template');
const inquirer = require('inquirer');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Prompt for manager's info
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

// Here, the method promptTeam attaches an array of objects called employees
// to the parameter teamData, right alongside the Manager's info.
const promptTeam = teamData => {
    console.log(`
  ==============================
    `);

    // If there's no 'employees' array property, create one
    if (!teamData.employees) {
        teamData.employees = [];
    }
    
    // This variable is set a default value of false. It is changed to true
    // when the user enters the option for adding an engineer.
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
        // if user wants to add another employee, then we do a recursive call, otherwise return 
        // the teamData, which is the profile to be generated on the HTML file. 
        .then(wantsAnother => {
            if (wantsAnother) {
                return promptTeam(teamData);
            }
            else {
                return teamData;
            }
        })
};

// This chain of promises can be summarized as follows: First prompt for manager info. Then, prompt for 
// team members. After the team profile has been completed, pass it on to the pageHTML parameter and
// write the info to an HTML template. Then, call the copy function to copy the style.css sheet into
// the 'dist' folder, where it will attach with the HTML file. The final promise is a catch method for errors.

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