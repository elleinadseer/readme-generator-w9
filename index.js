// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Connects the generateMarkdown file
const generateMarkdown = require('/Users/danielle/bootcamp/readme-generator-w9/utils/generateMarkdown.js')

// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is required to use your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project using?',
        choices: ['MIT', 'None', 'GPLv3', 'Apache']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is done to use your project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How to test the project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?'
    }
];

// Function to write README file using FS. Deals with errors if they occur. 
function writeToFile(fileName, data) {
        fs.writeFile('README.md', data, (err) =>
        err ? console.error(err) : console.log("Success")
        );
      }  

// Function to initialize app. Using inquirer to ask prompts then provides answers to the generateMarkdown file. 
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);

        writeToFile('README.md', markdown);
    });
}

// Function call to initialize app
init();
