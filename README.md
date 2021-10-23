# Team-Profile-Generator

![License Badge](https://img.shields.io/github/license/mmeii/10-team-profile-generator)

This is a Node.js command-line application that takes in information about employees on a software engineering team via inquirer and CLI, then generates an HTML webpage that displays summaries for each person.

## Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Tests](#tests)
4. [SAMPLE of Generated File](#SAMPLE-of-Generated-File)
5. [Walkthtrough](#walkthrough)

## Installation

1. Download or clone repository
2. Node.js is required to run the application
3. `npm install` to install the required npm packages

## Usage

- Application will be invoked by using the following command:

  `node app.js`

- The user will be prompted for information to select employee type
  - Manager (only one is allowed to be added)
  - Engineer (any number)
  - Intern (any number)
- All employee will be asked the following information, all prompts are validated to ensure appropriate input to generate the correct output

  - Name
  - ID
  - Email

- Depending on employee role, additional prompts are presented
  - Manager - office number
  - Engineer - GitHub username
  - Intern - school
- Then a team.html page will be generated in the output directory, that displays a nicely formatted team roster.

## Tests
- Jest will be invoked by using the following command:

  `npm run test`
- Each test is a seperate script located in "__tests__"

![Running Tests](https://github.com/MichaelAdamGroberman/Team-Profile-Generator/blob/main/assets/RunningTests.mov)

## SAMPLE of Generated File
![generatedFile](https://github.com/MichaelAdamGroberman/Team-Profile-Generator/blob/main/assets/generatedFile.png)

## Walkthrough

![Video Walkthrough](https://github.com/MichaelAdamGroberman/Team-Profile-Generator/blob/main/assets/VideoWalkthrough.gif)
