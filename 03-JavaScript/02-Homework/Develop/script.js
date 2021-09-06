// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLtrs = "abcdefga";
var specialChars = "-[]&*";
var numbers = "0123456789";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var test = 'Henry';

  console.log(test);
  // var passwordLength = prompt("How long should your password be? (8-128 chars)")
  // var isUpperCase = confirm("Do you want it to contain uppercase lettters?");
  // console.log(isUpperCase);
  // console.log(passwordLength);
  // for(var i = 0; i < passwordLength; i++) {

  // }

  // console.log(password);
  // console.log(password.join(''));
  return test;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
