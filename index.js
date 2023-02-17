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
    {
        type: 'input',
        message: "Describe your project:",
        name: 'description'
    },
    {
        type: "confirm",
        message: "do you want to include an installation guide?",
        name: 'instConf',

    },
    {
        type: 'input',
        message: "Add Install Instructions:",
        name: 'description',
        when: (answers) => answers.instConf === true
    },
    {
        type: "confirm",
        message: "do you want to include a usage guide?",
        name: 'usageConf',

    },
    {
        type: 'input',
        message: "Add usage Instructions:",
        name: 'usage',
        when: (answers) => answers.usageConf === true
    },
    {
        type: "confirm",
        message: "do you want to include a License?",
        name: 'licenceConf',

    },
    {
        type: 'list',
        message: "Choose a License:",
        name: 'licence',
        choices: ["Apache", "BSD", "Copyleft", "GPL", "MIT", "Mozilla", "Open-Source", "Public-Domain", "WTFPL"],
        when: (answers) => answers.licenceConf === true
    },
    {
        type: "confirm",
        message: "do you want to include contributers?",
        name: 'contribConf',

    },
    {
        type: 'input',
        message: "Add contributers(seperate with a comma):",
        name: 'contributing',
        when: (answers) => answers.contribConf === true
    },
    {
        type: "confirm",
        message: "do you want to include tests?",
        name: 'testsConf',

    },
    {
        type: 'input',
        message: "Add Test information:",
        name: 'tests',
        when: (answers) => answers.testsConf === true
    },
    {
        type: "confirm",
        message: "do you want to include a Questions section?",
        name: 'questionsConf',

    },
    {
        type: 'input',
        message: "What is your Github user name?",
        name: 'gitUserName',
        when: (answers) => answers.questionsConf === true
    },
    {
        type: 'input',
        message: "What is your email address for people to contact you?",
        name: 'email',
        when: (answers) => answers.questionsConf === true
    },
    {
        type: 'input',
        message: "Add instruction on how users can reach you:",
        name: 'questions',
        when: (answers) => answers.questionsConf === true
    },

];
function makeFileStructure(root, newDir){

    //make root directory is doesnt exist
    makeDir(root);
    //make project folder
    makeDir(newDir);

}

function makeDir(dir){
    fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) throw err;
        });
}

// function to write README file
function writeToFile(fileName, data, images, fileStructure) {
     
    //write readme file
    fs.writeFile(`${fileStructure[1]}/README.md`, data, err => {
        if (err) {
            console.error(err);
        } else {
            //alert all went well
            console.log(`Your README for project: "${fileName}", has been Saved in the "${fileStructure[0]}" directory`);
        }
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);

            // make file Structure
            let title = answers.title;
            let root = 'projectFiles';
            let newDir = title.split(" ").join("_");
            makeFileStructure(root, `${root}/${newDir}`);

            //write file
            let FileStructure = [root, `${root}/${newDir}`];
            let data = generateMarkdown(answers);
            writeToFile(title, data, ['mit','bsd'], FileStructure);
        });

}

// function call to initialize program
init();



