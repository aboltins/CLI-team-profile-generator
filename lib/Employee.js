// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = 'Employee';
    }
    getName() {
        return this.name;
    }
    getID() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;