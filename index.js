// Feed in inquirer package; fs module; and class constructors and functions from other files
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require('fs');
const generateHTML = require("./src/page-template")

// Create an array to hold all team data objects from inquirer prompts
const teamData = [];

// Create function to add manager to team profile through inquirer
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
        // Convert the managerData object into an array of key value pairs
        let keyValues = Object.entries(managerData);
        // Splice into the array a role key value pair that is needed to generate the class instances
        keyValues.splice(3,0, ["role","Manager"]);
        // Convert the array back to an object
        let managerObj = Object.fromEntries(keyValues);
        // Destructure the manager object to grab the values that can be fed into class instances
        const { name, id, email, role, officeNumber} = managerObj;
        let manager = (new Manager(name, id, email, role, officeNumber));
        // Push the manager object up to global array of team data 
        teamData.push(manager);
        // Take user to the menu of options for continuing to build teams
        profileMenuOptions();
    })
    .catch(err => {
    console.log(err);
    });
};

// Create function to add menu of options 
const profileMenuOptions = () => {
    inquirer.prompt(
        {
            type: "list",
            name: "role",
            message: "What team member would you like to enter next?",
            choices: ['Engineer', 'Intern', 'Finish building team'],
        })
    .then (({ role }) => {
        // Create if statement to direct user to the functions associated with the team member's role
        if (role === "Engineer"){
            addEngineer();
        } else if (role === "Intern") {
            addIntern();
        } else {
            // Create a statement to notify user that application has finished
            console.log("You have finished entering your team profiles. Goodbye!");
            // Call the buildHTML() function to generate team member profile webpage
            buildHTML();
            return;
        }

    })
};

// Create function to add engineers to team profile through inquirer
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
        // Follow same logic as managerData to create Engineer object and push up to global team data array
        let keyValues = Object.entries(engineerData);
        keyValues.splice(3,0, ["role","Engineer"]);
        let engineerObj = Object.fromEntries(keyValues);
        const { name, id, email, role, github} = engineerObj;
        let engineer = new Engineer(name, id, email, role, github);
        teamData.push(engineer);
        profileMenuOptions();
    })
    .catch(err => {
    console.log(err);
    });
};

// Create function to add interns to team profile through inquirer
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
            name: "school",
            message: "Enter your team intern's school (Required)",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your team intern's school!");
                    return false;
                }
            }
        },
    ])
    .then(internData => {
        // Follow same logic as managerData to create final Intern object and push up to global team data array
        let keyValues = Object.entries(internData);
        keyValues.splice(3,0, ["role","Intern"]);
        let internObj = Object.fromEntries(keyValues);
        const { name, id, email, role, school} = internObj;
        let intern = new Intern(name, id, email, role, school);
        teamData.push(intern);
        profileMenuOptions();
    })
    .catch(err => {
    console.log(err);
    });
};

// Create a function to write HTML file and generate the HTML page template with the team data array
function writeToFile(fileName, data) {
    fs.writeFile('./dist/'+ fileName , generateHTML(data), err => {
        if (err) throw err;
        console.log('Team Profile generation complete! Check out index.html to see the output!');
    });
};

// Create a function that calls the writeToFile function
function buildHTML() {
    writeToFile("index.html", teamData);

}

// Create a function to begin building the team profile
function buildProfile() {
    // Create a welcome message
    console.log("Welcome to the Teeam Profile Generator! Let's begin with adding a manager to your team.");
    // Start program by adding manager
    addManager();
};


// Initialize the Team Profile Generator application
buildProfile();
