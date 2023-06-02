// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('/Users/danielle/bootcamp/readme-generator-w9/utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// Questions: Project Title, Description, Table of Contents, Installation, Usage, License, Contributing, 
// Tests, and Questions (user and email for Q)

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
        choices: ['MIT', 'None']
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log('hello')


/*
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'firstName',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'methods',
    },
  ])

  .then((answers) => {
    fs .writeFile('log.text', JSON.stringify(answers), (err) =>
    err ? console.error(err) : console.log("Success")
    );
  })   

—————

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

——

Need to hide the node 
*/