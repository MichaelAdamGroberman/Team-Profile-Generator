// require the Employee module we export in Employee.js
const Employee = require("*./Employee");

// Manager class that extends the employee class and esponsible for retreiving and storing Intern type employee properties from the database
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.title = "Manager";
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// export 'Manager' as a module so it can be used elsewhere in the application
module.exports = Manager;