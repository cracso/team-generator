// TODO: Write code to define and export the Employee class
// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Employee {
    constructor(myName, myId, myEmail) {
      // If a character is not a number or a letter, make it visible right away
      // Save the underlying character
        this.name = myName;
        this.id = myId;
        this.email = myEmail;


    //   this.visible = !/[a-z1-9]/i.test(char);
    //   this.char = char;
    }
  
    // Returns either an underscore or the underlying character depending on `this.visible`
    //    because we call this function toString, when we call `this.letters.join` in
    //    Word.js, JavaScript automatically uses the value we return here
    getName() {
     
      return this.name;
    }
  
    getId() {
      return this.id;
    }
  
    // Accepts a user's guess
    getEmail() {
        return this.email;
      }
    
    getRole() {
        return "Employee";
      }
  
  
      // Otherwise return false
      
    }
   
  module.exports = Employee;