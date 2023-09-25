// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"]; 
var numeric = ["0123456789"];
var specialCharacters = ["!@#$%^&*()"]; 

} 


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){ 
} 

var userChoice = window.prompt("How would many characters 8 - 128"); 
if (userChoice < 7)  {
 window.alert ("Must be more than 7 characters")
}
 if (userChoice > 128) {
  window.alert ("Must be less than 128 characters")
} 





window.confirm("Include Lowercase")
window.confirm("Include Uppercase") 
window.confirm("Include Numeric") 
window.confirm("Include Special Characters") 
