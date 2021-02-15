// Assignment code here

var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("123456789");
var symbols = ("!@#$%^&*()")

var password = "";

var lowerCase1 = false;
var uppercase1 = false;
var numbers1 = false;
var symbols1 = false;

console.log("upperCase")
// if (ok === true) {
  
// }

function generatePassword() {
  var length = window.prompt ("How many characters will your password be? (Choose between 8 and 128)")
  
  if (length >=8 && length <= 128) {
   
  } else {
  return("");

  }

var lowerCase = window.confirm("Do you want lower case letters");
  
  if (lowerCase == true)

var upperCase = window.confirm("Do you want upper case letters");
 
  if (upperCase == true)

var numbers = window.confirm("Do you want numbers");
  
  if (numbers == true)

var symbols = window.confirm("Do you want symbols");
  
  if (symbols == true)

  if (lowerCase1 == false && upperCase1 == false && numbers1 == false && symbols == false) {
    alert("You must use at least one")
  }
  
 return ("");
 
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
