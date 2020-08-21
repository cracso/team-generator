const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const validator = require("email-validator");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employeeArr = [];

function promptUser() {

  inquirer.prompt([
    {
      type: "list",
      name: "occupation",
      choices: ["Engineer", "Intern", "Manager"],
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
      message: "What is the employees id?"
    }
  ])
    .then(function (response) {
      this.name = response.name;
      this.id = response.id;
      this.occupation = response.occupation;

      function checkEmail() {
        inquirer.prompt([
          {
            type: "input",
            message: "What is the employees email address?",
            name: "email"
          }
        ]).then(function (response) {
          if (validator.validate(response.email)) {
            this.email = response.email;
            if (this.occupation === "Manager") {
              inquirer.prompt([
                {
                  type: "input",
                  message: "What the employees office number?",
                  name: "officeNumber"
                }
              ])
                .then(function (response) {
                  this.officeNumber = response.officeNumber;
                  employeeArr.push(new Manager(this.name, this.id, this.email, this.officeNumber));
                  return addNew();
                })
            } else if (this.occupation === "Engineer") {
              inquirer.prompt([
                {
                  type: "input",
                  message: "What is the employees GitHub?",
                  name: "github"
                }
              ])
                .then(function (response) {
                  this.github = response.github;
                  employeeArr.push(new Engineer(this.name, this.id, this.email, this.github));
                  return addNew();
                })
            } else if (this.occupation === "Intern") {
              inquirer.prompt([
                {
                  type: "input",
                  message: "What is the name of the employees school?",
                  name: "school"
                }
              ]).then(function (response) {
                this.school = response.school;
                employeeArr.push(new Intern(this.name, this.id, this.email, this.school));
                return addNew();
              })
            };
          } else {
            console.log("Please enter a valid email address.");
            checkEmail();
          };
        })
      }
      checkEmail();
    })
}
promptUser();

function addNew() {
  inquirer.prompt([
    {
      type: "list",
      choices: ["Yes", "No"],
      name: "addNew",
      message: " Would you like to add a new team member?"
    }
  ])
    .then(function (response) {
      this.response = response.addNew
      if (this.response === "Yes") {
        return promptUser();
      } else {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR);
        }
        fs.writeFile(outputPath, render(employeeArr), "utf8", function (error) {
          if (error) {
            console.log(error);
            return;
          }
        });
        return console.log("Team has been created succesfully!!");
      }
    });
}