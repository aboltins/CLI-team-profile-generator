// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, email, github) {
        super(name, email, "Intern");
        this.github = github;
        // and other properties
    }
}

const int1 = new Intern("Robert", "testing@testing.com", "testing-tester");

module.exports = Intern;