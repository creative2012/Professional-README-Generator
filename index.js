const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Your README has been Saved!');
                }
            });
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let data = generateMarkdown(answers);
        writeToFile('test', data);
    });

}

// function call to initialize program
init();
