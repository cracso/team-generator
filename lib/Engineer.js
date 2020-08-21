
var Employee= require("./Employee");
class Engineer extends Employee{
    constructor(myName, myId, myEmail, myGithub) {
        super(myName, myId, myEmail)
        this.github= myGithub;
    }

    getGithub() {
      return this.github;
    }
    getRole() {
        return "Engineer";
      }
  
    }
   
  module.exports = Engineer;