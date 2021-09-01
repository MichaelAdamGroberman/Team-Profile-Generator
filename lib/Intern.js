// require the Employee module we export in Employee.js
const Employee = require("*./Employee");

// Intern class that extends the employee class and esponsible for retreiving and storing Intern type employee properties from the database
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = "Intern";
    }
    getSchool() {
        return this.school
    }
}

// export 'Intern' as a module so it can be used elsewhere in the application
module.exports = Intern;
