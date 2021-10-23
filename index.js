// initiate all the required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const html = require("./src/htmlTemp");
// installs the required packages for running our __tests__
const jest = require("-- save-dev jest");
// makes sure that email VALUES are valid
const validator = require("email-validator");
// initiating all of the classes exported as modules in "/lib/"
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

// define async functions to append and write to a file
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();
console.log("---------- Team Profile Generator ----------");
console.log("Created by Michael Groberman");
console.log("GitHub: https://github.com/MichaelAdamGroberman");

// Main function to run the application
async function main() {
  try {
    await prompt();
    for (let i = 0; i < teamArray.length; i++) {
      teamString = teamString + html.generateCard(teamArray[i]);
    }
    let finalHTML = html.generateHTML(teamString);
    console.log("Generating index.html file...");
    writeFileAsync("./dist/index.html", finalHTML);
    console.log("Index.html file created successfully");
  } catch (err) {
    return console.log(err);
  }
}

// Inquirer Prompts to collect and store user inputed data
async function prompt() {
  let responseDone = "";
  do {
    try {
      let response = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the Employee's Name?: ",
          // validation function that checks if the name is empty.
          validate: function validateName(name) {
            return name !== "";
          },
        },
        {
          type: "input",
          name: "id",
          message: "What is the Employee's ID Number?: ",
          // validate function that checks if the ID is empty
          validate: function validateId(id) {
            return id !== "";
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the employee's email address?: ",
          // use npm package email-validator to validate if the user input is a valid email address
          validate: function validateEmail(email) {
            return validator.validate(email);
          },
        },
        {
          type: "list",
          name: "role",
          message: "Please select the Emoloyee Type and/or Role: ",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ]);

      // note** Every key in an object is evaluated as a string
      const employeeLookup = {
        Engineer: {
          prompt: {
            type: "input",
            name: "extendedProperty",
            message: "What is the employee's github username?:",
            validate: function validateName(name) {
              return name !== "";
            },
          },
          getTeamObj: (name, id, email, extendedProperty) =>
            new Engineer(name, id, email, extendedProperty),
        },
        Intern: {
          prompt: {
            type: "input",
            name: "extendedProperty",
            message: "What school is the employee attending?:",
            validate: function validateName(name) {
              return name !== "";
            },
          },
          getTeamObj: (name, id, email, extendedProperty) =>
            new Intern(name, id, email, extendedProperty),
        },
        Manager: {
          prompt: {
            type: "input",
            name: "extendedProperty",
            message: "What is the employee's office number?:",
            validate: function validateName(name) {
              return name !== "";
            },
          },
          getTeamObj: (name, id, email, extendedProperty) =>
            new Manager(name, id, email, extendedProperty),
        },
      };

      // await for the employee role value from the inquirer prompt lookup object
      const response2 = await inquirer.prompt([
        employeeLookup[response.role].prompt,
      ]);

      const teamMember = employeeLookup[response.role].getTeamObj(
        response.name,
        response.id,
        response.email,
        response2.extendedProperty
      );

      teamArray.push(teamMember);
    } catch (err) {
      return console.log(err);
    }

    // prompt user if they want to continue adding employee(s)
    responseDone = await inquirer.prompt([
      {
        type: "list",
        name: "finish",
        message: "Do you want to continue?: ",
        choices: ["Yes", "No"],
      },
    ]);
  } while (responseDone.finish === "Yes");
  {
    console.log("Finished Adding Employees");
  }
}

// iniating our main() function!!!
main();
