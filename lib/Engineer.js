// require the Employee module we export in Employee.js
const Employee = require("./Employee");

// Engineer class that extends the employee class and esponsible for retreiving and storing Engineer type employee properties from the database
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.title = "Engineer";
    this.github = github;
  }
  getGitHub() {
    return this.github;
  }
}

// export module as 'Engineer' so that it can be used elsewhere by the application
module.exports = Engineer;
