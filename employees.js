// This file was created to keep the main index.js file more organized
// and to avoid cluttering. It contains the promptEngineer and 
// promptIntern methods which are exported to index.js
const inquirer = require('inquirer');

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
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
            message: "What is the Engineer's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Engineer's ID number.",
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
            name: 'github',
            message: "Enter Engineer's github username.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ]);
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",
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
            message: "What is the Intern's email?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter Intern's ID number.",
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
            name: 'school',
            message: "Enter Intern's school.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a school!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddAnother',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ]);
};

module.exports = { promptEngineer, promptIntern };