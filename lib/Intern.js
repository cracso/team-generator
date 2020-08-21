var Employee = require("./Employee");
class Intern extends Employee {
  constructor(myName, myId, myEmail, mySchool) {
    super(myName, myId, myEmail)
    this.school = mySchool;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

}

module.exports = Intern;