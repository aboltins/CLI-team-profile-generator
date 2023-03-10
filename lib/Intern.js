// Imports employee class.
const Employee = require("./Employee.js");

//Creates Intern class that extends Employee class.
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, "Intern");
        this.school = school;
        this.role = 'Intern';
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;