const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");
const fs = require('fs');

const profileQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your team manager's name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name!");
                    return false;
                }
            }
        },
                {
            type: "input",
            name: "id",
            message: "Enter your team manager's employee ID (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's employee ID!");
                    return false;
                }
            }
        },
        
        {
            type: "input",
            name: "email",
            message: "Enter your team manager's email address (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's email address!");
                    return false;
                }
            }
        },       
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your team manager's office number (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's office number!");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "role",
            message: "What team member would you like to enter next?",
            choices: ["Engineer", "Intern", "Finish building team"]
        },
        {
            type: "input",
            name: "name",
            message: "Enter your team engineer's name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's name!");
                    return false;
                }
            }
        },
                {
            type: "input",
            name: "id",
            message: "Enter your team engineer's employee ID (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's employee ID!");
                    return false;
                }
            }
        },
        
        {
            type: "input",
            name: "email",
            message: "Enter your team engineer's email address (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's email address!");
                    return false;
                }
            }
        },       
        {
            type: "input",
            name: "github",
            message: "Enter your team engineer's GitHub Username (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your team engineer's GitHub Username!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: "Enter your team intern's name (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your team intern's name!");
                    return false;
                }
            }
        },
                {
            type: "input",
            name: "id",
            message: "Enter your team intern's employee ID (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your team intern's employee ID!");
                    return false;
                }
            }
        },
        
        {
            type: "input",
            name: "email",
            message: "Enter your team intern's email address (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your team intern's email address!");
                    return false;
                }
            }
        },       
        {
            type: "input",
            name: "github",
            message: "Enter your team intern's school (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your team intern's school!");
                    return false;
                }
            }
        },
    ]);
};
