// Goal: Generate a password that fits in the range of 8-128 characters based on the criteria given

//Assignment code 
document.querySelector("#generate").addEventListener("click", writePassword);

//Arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declarations
var confirmLength = "";
var confirmSpecialCharacters;
var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;

//Prompt for password length
function generatePassword () {
var confirmLength = (prompt("Choose a length between the range of 8-128 for the amount of characters your password will contain."));

//loop (if password length does not meeet criteria)
while(confirmLength <= 7 || confirmLength >= 129) {
  alert("Password length must be between 8 to 128 characters. Please, try again!");
  var confirmLength = (prompt("Please choose how many characters your password will contain."));
}

//Confirm password length (if criteria is met)
alert("Password will have " + confirmLength + " characters.");

//Parameters
  var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include special characters in your password");
   if (confirmSpecialCharacters) {
     window.alert("You chose to have special characters in your password.");
   }
  var confirmNumbers = confirm("Click OK to confirm if you would like to include numeric characters in your password"); 
   if (confirmNumbers) {
     window.alert("You chose to have numbers in your password.");
   }   
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters in your password");
   if (confirmLowerCase) {
     window.alert("You chose to have lower case letters in your password.");
   }
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters in your password");
   if (confirmUpperCase) {
     window.alert("You chose to have upper case letters in your password.");
   }
//loop for wrong answer
while(confirmUpperCase, confirmLowerCase, confirmSpecialCharacters, confirmNumbers === false) {
  window.alert("Please choose at least one parameter");
  var confirmSpecialCharacters = confirm("Click OK to confirm if you would like to include special characters in your password");
   if (confirmSpecialCharacters) {
     window.alert("You chose to have special characters in your password.");
   }
  var confirmNumbers = confirm("Click OK to confirm if you would like to include numeric characters in your password"); 
   if (confirmNumbers) {
     window.alert("You chose to have numbers in your password.");
   }   
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters in your password");
   if (confirmLowerCase) {
     window.alert("You chose to have lower case letters in your password.");
   }
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters in your password");
   if (confirmUpperCase) {
     window.alert("You chose to have upper case letters in your password.");
   }
}

var passwordCharacters = []
      
    if (confirmSpecialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharacters)
    }
    if (confirmNumbers) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }     
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerAlphabet)
    }
    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperAlphabet)
    }
console.log(passwordCharacters)

// Empty string to be filled based on for loop selecting random characters from the array
var randomPassword = ""
      
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
return randomPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}