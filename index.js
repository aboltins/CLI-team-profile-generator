const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    //managerquestions
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'email',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNumber',
    },

]).then(response => {
    // populate manager info
    promptForNextEmployee();
})

const promptForNextEmployee = () => {
    inquirer.prompt([{
        type: "list",
        message: "Which type of team member would you like to add? ( Use arrow keys)",
        name: "license",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }])
    // .then(response => {
    //     // if engineer
    //     //    promptForEngineer
    //     // else if intern
    //     //    promptForIntern
    //     // else
    //     //    use the functionality from page-template to generate the team
    // })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
    }]).then(response => {
        // add new engineer to employees array
        // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
    }]).then(response => {
        // add new intern to employees array
        // promptForNextEmployee
    })
}

const buildPage = () => {
    // fs write file
}
