// initiate all the required packages
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const html = require("./src/htmlTemp");
const validator = require("email-validator");
// initiate all the requires modules found in "/lib/"
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// define async functions to append and write to a file
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let teamArray = [];
let teamString = ``;

console.clear();
console.log("---------- Team Profile Generator ----------");
console.log("Created by Michael Groberman")
console.log("GitHub: https://github.com/MichaelAdamGroberman")

// Main function to run the application
async function main() {
    try {
        await prompt()
        for (let i=0; i < teamArray.length; i++) {
            teamString = teamString + html.generateCard(teamArray[i]);
        }
        let finalHTML = html.generateHTML(teamString)

        console.clear();
        console.log("Generating index.html file...");

        console.clear();
        writeFileAsync("./dist/index.html", finalHTML);
        console.log("Index.html file created successfully")
    } catch (err) {
        console.clear();
        return console.log(err);
    }
}

// Inquirer Prompts to collect and store user inputed data
async function prompt() {
    let responseDone = "";
    do {
        try {
            console.clear();
            let response = await inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the Employee's Name?: ",
                // validation function that checks if the name is empty.
                validate: function validateName(name) {
                    return name !== '';
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the Employee's ID Number?: ",
                // validate function that checks if the ID is empty 
                validate: function validateId(id) {
                    return id !== '';
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the employee's email address?: "
                // use npm package email-validator to validate if the user input is a valid email address
                validate: function validateEmail(email) {
                    return validator.validate(email);
                }
            },
            {
                type: "list",
                name: "Role/Type",
                message: "Please select the Emoloyee Type and/or Role: ",
                choices: ["Engineer", "Intern", "Manager"]
            }
        ]);
            }
         
        }
    }
}