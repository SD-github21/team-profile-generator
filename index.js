const inquirer = require("inquirer");

const addManager = () => {
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
    ])
    .then(managerData => {
        console.log(managerData);
        let keyValues = Object.entries(managerData);
        keyValues.splice(3,0, ["role","Manager"]);
        let managerObj = Object.fromEntries(keyValues);
        console.log(managerObj);  
        profileMenuOptions();
    })
    .catch(err => {
    console.log(err);
    });
};

const profileMenuOptions = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "What team member would you like to enter next?",
            choices: ['Engineer', 'Intern', 'Finish building team'],
        })
    .then (({ role }) => {
        if (role === "Engineer"){
            addEngineer();
        } else if (role === "Intern") {
            addIntern();
        } else {
            console.log("You have finished entering your team profiles. Goodbye!");
            return;
        }

    })
};

const addEngineer = () => {
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
    .then(engineerData => {
        engineerData.role = "engineer";
        console.log(engineerData);
        profileMenuOptions();
    })
    .catch(err => {
    console.log(err);
    });
};

const addIntern = () => {
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
    .then(internData => {
        console.log(internData);
        profileMenuOptions();
    })
    .catch(err => {
    console.log(err);
    });
};


function buildProfile() {
    addManager()
};


buildProfile();
