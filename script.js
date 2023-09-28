// Assignment Code
  // Variable character selection for the password generator//
  var generateBtn = document.querySelector("#generate");
  var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',]; 
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
  var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  var userInput = [];
  var characterLength = [];

// Function to prompt user for password options
function getPasswordOptions() { 
  
// Variable to store length of password from user input
var characterLength = prompt("How many characters 8 - 128");
characterLength = parseInt(characterLength);

// Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
if (characterLength < 8) { 
window.alert ("Must have at least 8 characters"); 
 return prompt;
}
  
// Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
if (characterLength > 128) {
window.alert ("Must be less than 128 characters"); 
return prompt;
} 


// Variable to store boolean regarding the inclusion of special characters
  var specialCharactersUser = confirm("Include Special Characters?")

// Variable to store boolean regarding the inclusion of numeric characters
  var numericUser = confirm("Include numeric?")
 
// Variable to store boolean regarding the inclusion of lowercase characters
  var lowerCaseUser = confirm("Include lower case?")

// Variable to store boolean regarding the inclusion of uppercase characters
  var upperCaseUser = confirm("Include upper case?")
  

// Function to generate password with user input
function generatePassword() {
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector('#password');

passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);  
}
