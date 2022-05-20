const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");
const fs = require('fs');

const profileManagerQuestions = () => {
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
    ]);
    // Add code to go to profileMenuOptions + getRole(manager) + print out manager information to HTML
};

const profileMenuOptions = () => {
    return inquirer.prompt([
        {
            type: "checkbox",
            name: "role",
            message: "What team member would you like to enter next?",
            choices: ["Engineer", "Intern", "Finish building team"]
        },
    ])
    // Add if else or when statement to direct to next series of questions
    // .then
};

const profileEngineerQuestions = () => {
    return inquirer.prompt([
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
    ])
    // Add code to go to profileMenuOptions + getRole(engineer) + print out engineer information to HTML
};

const profileInternQuestions = () => {
    return inquirer.prompt([
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
    ])
    // Add code to go to profileMenuOptions + getRole(intern) + print out intern information to HTML
};
