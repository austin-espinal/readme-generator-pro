// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            return;
        } else {
            console.log('New README created!!');
        }
    });
}

// TODO: Create a function to initialize app
const init = () => {
    console.log('You MUST answer each question in order to produce a high quality README!!!');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of the project?',
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
            message: 'Provide directions for installing everything necessary to be able to run the project.',
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
            message: 'Enter step by step directions on how to run/use your project.',
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
            message: 'Please choose one of the licenses from the list that best apply to your project. If none apply or unsure, please choose none',
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
            message: 'Please provide any way to test your application and directions on how to.',
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
        },
        {
            type: 'input',
            name: 'add',
            message: 'If someone has additional questions, please enter instructions on the best way to reach you.',
            validate: mailInput => {
                if (mailInput) {
                    return true;
                } else {
                    console.log('Please enter instructions on how to reach you with additional questions');
                    return false;
                }
            }
        }
    ])
    .then(markdownData => {
        console.log(markdownData);
        questions.push(markdownData);
        return generateMarkdown(markdownData);
    })
};

// Function call to initialize app
init()
.then(readME => {
    console.log(readME);
    return writeToFile(readME);
})
.catch(err => {
    console.log(err);
});