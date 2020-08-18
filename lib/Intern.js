// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Employee class
// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
var Employee= require("./Employee");
class Intern extends Employee{
    constructor(myName, myId, myEmail, mySchool) {
      // If a character is not a number or a letter, make it visible right away
      // Save the underlying character
        // this.name = myName;
        // this.id = myId;
        // this.email = myEmail;

        super(myName, myId, myEmail)
        this.school= mySchool;

         
        
    //   this.visible = !/[a-z1-9]/i.test(char);
    //   this.char = char;
    }

    getSchool() {
      return this.school;
    }
  
    // Returns either an underscore or the underlying character depending on `this.visible`
    //    because we call this function toString, when we call `this.letters.join` in
    //    Word.js, JavaScript automatically uses the value we return here

 
    
    getRole() {
        return "Intern";
      }
  
  
      // Otherwise return false
      
    }
   
  module.exports = Intern;