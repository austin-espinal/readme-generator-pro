// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    console.log('You MUST answer each question in order to produce a high quality README!!!');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the name of the project? (required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. Why was it built? What problem does it solve? How did you come up with it? ',
            validate: descriptInput => {
                if (descriptInput) {
                    return true;
                } else {
                    console.log('PLEASE enter a description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the step by step directions for installing your project.',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('PLEASE enter installation directions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide directions on how to use your project.',
            validate: useInput => {
                if (useInput) {
                    return true;
                } else {
                    console.log('PLEASE enter directions on how to use/run project!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose from the list of licenses that best apply to your project. If none apply or unsure, please choose none',
            choices: ['NONE', 'MIT', 'Apache 2.0', 'GNU General Public 3.0', 'Creative Common Zero 1.0'],
            default: 'NONE'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please provide contribution guidelines for other developers who are interested in contributing.',
            validate: conInput => {
                if (conInput) {
                    return true;
                } else {
                    console.log('PLEASE enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any way to test your application and directions on how to run it.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter ways to test your application along with directions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username. This will be placed in the Questions section of README',
            validate: gitInput => {
                if (gitInput) {
                    return true;
                } else {
                    console.log('please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter your github link to the project repo.',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('please enter your github repo link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
            validate: mailInput => {
                if (mailInput) {
                    return true;
                } else {
                    console.log('please enter your email!');
                    return false;
                }
            }
        }
    ])
};

// Function call to initialize app
init();
