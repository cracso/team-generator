const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArr = [];


//1.first ask what is your occ (intern, engineer, mangeer)=> via inquierer

function promptUser() {
  return inquirer.prompt([
    {
      type: "list",
      name: "occupation",
      choices: ["engineer", "intern", "manager"],
      message: "What is the employees occupation?"
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee email?"
    }
  ]);
}

function mainmenu(role) {
  if (role.occupation == "engineer") {
    buildEngineer(role)
  }
} 

function buildEngineer(role) {
  console.log("inside engineer fx");
  console.log(role)
  inquirer.prompt([
    {
      type: "input",
      name: "github",
      message: "What is the employees github?"
    },

    {
      type: "list",
      name: "newMember",
      choices: ["yes", "no"],
      message: "Is there more employees?"
    }
    
  ]).then(function (engineerDetails) {
    console.log(engineerDetails);
    const newEngineer = new Engineer(role.name, role.id, role.email, engineerDetails.github);
    console.log(newEngineer);
    employeeArr.push(newEngineer)
    // if (engineerDetails.newMember = "yes") {
    //   return promptUser();
    // } 
});
    
     
    //1. see if they said yes or no
    //if they say yes
    //add the new employee into the array
    //..then what do we do?
    //if no: 
    //return make the page
    //what data do we need to make the page? throw them into an array
    //(what the array have to have) array of object
    //what is in the object and how to we create it?
    
    
}


//2. if i am an engineer then i need to ask the questions below
//engineer name, id, email, github

//3. create you engineerobject
//var newGuy  = new Engineer(name, id, email, github);

//4. throw it into an array
//employee.push(newGuy)

//5. ask if there are more ppl?
//if they say yes, means we have more ppl (go back to step one and repeat until no more employees)
//if they say no,
// we are done and we need to call the render fx passing in employeeArray




//1. asks the questions via promptUser
promptUser()
  //2. convert all the questions from promptUser into an obj
  .then(function (answers) {
    mainmenu(answers);
  //     const html = render(answers);

  //     return writeFileAsync("team.html", html);
  //   })
  //   .then(function() {
  //     console.log("Successfully created team!");
  //   })
  //   .catch(function(err) {
  //     console.log(err);
  });








// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
