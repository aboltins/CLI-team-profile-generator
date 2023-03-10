// Imports employee class.
const Employee = require("./Employee.js");

//Creates Engineer class that extends Employee class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.github = github;
        this.role = 'Engineer';
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
} 

module.exports = Engineer;