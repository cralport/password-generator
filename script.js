// Assignment code here
var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numbers = ("123456789");
var symbols = ("!@#$%^&*()")


var length = window.prompt ("How many characters will your password be? (Choose between 8 and 128")
var lowerCase = window.confirm("Do you want lower case letters");
var upperCase = window.confirm("Do you want upper case letters");
var numbers = window.confirm("Do you want numbers");
var symbols = window.confirm("Do you want symbols");

if (ok == true) {
  
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

