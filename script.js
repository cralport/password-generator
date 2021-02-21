// Assignment code here
console.log("lowerCase")


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "()"]
var choices = [];

var confirmLower;
var confirmUpper;
var confirmNumbers;
var confirmSymbols;
console.log(choices)

console.log("upperCase")


function generatePassword() {
  var length = window.prompt("How many characters will your password be? (Choose between 8 and 128)")

  if (length >= 8 && length <= 128) {

  } else {

    return ("");

  }


  confirmLower = window.confirm("Do you want lower case letters");

  if (confirmLower == true) {
    choices = (choices.concat(lowerCase))
  };

  confirmUpper = window.confirm("Do you want upper case letters");

  if (confirmUpper == true) {
    choices = (choices.concat(upperCase))
  };

  confirmNumbers = window.confirm("Do you want numbers");

  if (confirmNumbers == true) {

    choices = (choices.concat(numbers))
  };

  confirmSymbols = window.confirm("Do you want symbols");

  if (confirmSymbols == true) {
    choices = (choices.concat(symbols))

  };

  if (confirmLower === false && confirmUpper === false && confirmNumbers === false && confirmSymbols === false) {
    alert("At least one character needs to be selected");
    return ("");

  }


  console.log("checking", (lowerCase === false && upperCase === false && numbers === false && symbols === false))
  console.log(choices)

  var password = "";
  console.log("password")
  console.log(choices.length)
  for (var i = 0; i < length; i++) {
    password += (choices[char])
    var char = Math.floor(Math.random() * choices.length);
    console.log("what is char", choices[char])
  }
  return (password);



}




console.log("numbers")
// Get references to the #generate element
var generateBtn = document.querySelector("#generate")
console.log("symbols")
// Write password to the #password input
function writePassword() {
  console.log("same")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("whatver")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("end")