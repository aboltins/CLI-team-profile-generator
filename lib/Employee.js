// Creates and exports the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = 'Employee';
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;