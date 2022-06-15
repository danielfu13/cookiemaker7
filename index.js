// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license did you use for this project?",
        choices: [
          "Apache 2.0",
          "BSD 3-Clause License",
          "BSD 2-Clause License",
          "GNU GPL v3",
          "IBM",
          "Boost",
        ],
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "How to install project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How is this project used?"
    },
    {
        type: "input",
        name: "contribution",
        message: "Who were the contributors for this project?"
    },
    {
        type: "input",
        name: "test",
        message: "How would you test this project?"
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/generate-README.md`, data, err => {
        if (err) {
            throw err
        };
        console.log('README created!')
    });
};


// function to initialize program
function init() {
    return inquirer.prompt(questions);
};

// function call to initialize program
init()
.then(userInput => {
    return generate(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})
