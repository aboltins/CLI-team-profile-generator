// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
        this.role = 'Engineer';
        // and other properties
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
} 

const eng1 = new Engineer("Bob", "test@test.com", "tester");

module.exports = Engineer;