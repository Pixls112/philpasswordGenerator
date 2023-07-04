// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];;
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!','@','#','$','%','^','&','*','+','-','=','_','<','>','?',':','~'];
var pass = [];
var completedPass = [];

let passwordLength = prompt("How long would you like your password to be? Password must be between 8-128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters");
    return;
  } else {
    alert("Password will be " + passwordLength + " characters long");
  }
  
  let addupperCase = confirm("would you like uppercase letters in your password?")
  if (addupperCase === true) {
    alert("Password will contain uppercase characters");
  } else {
    alert("Password will not contain any uppercase characters");
  }

  let addlowerCase = confirm("would you like lowercase letters in your password?")
  if (addlowerCase === true) {
    alert("Password will contain lowercase characters");
  } else {
    alert("Password will not contain any lowercase characters");
  }

  let addnumberVal = confirm("would you like number values in your password?")
  if (addnumberVal === true) {
    alert("Password will contain number value");
  } else {
    alert("Password will not contain any number value");
  }

  let addspecialChars = confirm("would you like special characters letters in your password?")
  if (addspecialChars === true) {
    alert("Password will contain special characters");
  } else {
    alert("Password will not contain any special characters");
  }


 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
