// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("function hit");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  alert("HERE IS MY ALERT");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1) Make button do stuff
// 2) What options will we give the user?
// 3) How will we present these options to the user?
// 4)
// 5)
