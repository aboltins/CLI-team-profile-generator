// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, email, github) {
        super(name, email, "Manager");
        this.github = github;
        // and other properties
    }
}

const man1 = new Manager("Arnold", "test-test@test.com", "tester-tester");

module.exports = Engineer;