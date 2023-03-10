const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Gathers information about the development team members, and renders the HTML file.

// employees array that will store the responses.
let employees = [];

inquirer.prompt([
    //managerquestions
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'officeNumber',
    },

]).then(response => {
    // populate manager info
    const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber);
    // push manager info to the employees array.
    employees.push(newManager);
    //prompt for next employee choice.
    promptForNextEmployee();
})

//  Next employee prompt
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
            } else {
                //calls the build page function if user doesn't choose to add more employees.
                buildPage();
            }
        });
};

// Engineer prompt
const promptForEngineer = () => {
    inquirer.prompt([
        //engineer questions
        {
            type: 'input',
            message: "What is your engineer's name?",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "What is your engineer's id?",
            name: 'engineerId',
        },
        {
            type: 'input',
            message: "What is your engineer's email?",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "What is your engineer's Github username?",
            name: 'engineerGithub',
        },
    ]).then(response => {
        // add new engineer to employees array
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
        //push engineer info to employees array.
        employees.push(newEngineer);
        //prompt for next employee choice.
        promptForNextEmployee();
    })
}

// Intern prompt
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
        //push intern info to employees array.
        employees.push(newIntern);
        //prompt for next employee choice.
        promptForNextEmployee();
    })
}

// build page function

const buildPage = () => {
    const html = render(employees);
    fs.writeFile(outputPath, html, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Team page created successfully!");
    });
};
