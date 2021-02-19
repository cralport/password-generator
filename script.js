// Assignment code here
console.log("lowerCase")


var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "()"]
const choices = [];

var confirmLower;
var confirmUpper;
var confirmNumbers;
var confirmSymbols;
console.log(choices)

console.log("upperCase")


function generatePassword() {
  var length = window.prompt("How many characters will your password be? (Choose between 8 and 128)")

  if (length >= 8 && length <= 128) {
    console.log("good length")
  } else {
    console.log("bad length")
    return ("");

  }


  confirmLower = window.confirm("Do you want lower case letters");
  console.log(lowerCase)
  if (lowerCase == true) {
    choices = [lowerCase]
  };

  confirmUpper = window.confirm("Do you want upper case letters");
  console.log(upperCase)
  if (upperCase == true) {
    choices = [upperCase]
   };

  confrimNumbers = window.confirm("Do you want numbers");
  console.log(numbers)
  if (numbers == true) {
    choices = [numbers]
   };

  confrimSymbols = window.confirm("Do you want symbols");
  console.log(symbols)
  if (symbols == true) { 
    choices = [symbols]
  };

  if (confirmLower === false && confirmUpper === false && confrimNumbers === false && confrimSymbols === false) {
    alert("At least one character needs to be selected");
  }
  console.log("checking", (lowerCase === false && upperCase === false && numbers === false && symbols === false))
  console.log(choices)
  return ("");

}

var password = "";

for (var i = 0; i < choices.length; i++) {
  var password = Math.floor(Math.random() * choices.length);
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