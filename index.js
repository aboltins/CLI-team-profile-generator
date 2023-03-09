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
        name: "team",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."]
    }])
        .then(response => {
            if (response.team === "Engineer") {
                promptForEngineer();
            } else if (response.team === "Intern") {
                promptForIntern();
                // else
                //    use the functionality from page-template to generate the team
            }
        });
};

const promptForEngineer = () => {
    inquirer.prompt([
        //engineer questions
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "What is your engineer's id?",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "What is your engineer's Github username?",
            name: 'managerGithub',
        },
    ]).then(response => {
        // add new engineer to employees array
        const newEngineer = new Engineer(response.managerName, response.managerId, response.managerEmail, response.managerGithub);
        console.log(newEngineer);
        promptForNextEmployee();
    })
}

const promptForIntern = () => {
    inquirer.prompt([
        //intern questions
        {
            type: 'input',
            message: "What is your intern's name?",
            name: 'internName',
        },
        {
            type: 'input',
            message: "What is your intern's id?",
            name: 'internId',
        },
        {
            type: 'input',
            message: "What is your intern's email?",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "What is your intern's school?",
            name: 'internSchool',
        },
    ]).then(response => {
        // add new intern to employees array
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
        console.log(newIntern);
        promptForNextEmployee();
    })
}

const buildPage = () => {
    // fs write file
}
