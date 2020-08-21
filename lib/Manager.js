
var Employee= require("./Employee");
class Manager extends Employee{
    constructor(myName, myId, myEmail, myNumber) {
        super(myName, myId, myEmail)
        this.officeNumber= myNumber;
    }

    getOfficeNumber() {
      return this.officeNumber;
    }
 
    getRole() {
        return "Manager";
      }
  
    }
   
  module.exports = Manager;