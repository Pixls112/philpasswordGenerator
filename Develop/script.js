// Assignment Code
var generateBtn = document.querySelector("#generate");

// When looking in the console of the original code, its states that generatePassword has not been defined so I added variables and code inside this function so that it can be referenced elsewhere on this page.
function generatePassword() {
// These are the variables that will be used when the password is generated. I used them as an array so that they can easily be combined with .concat. 
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];;
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numberValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ['!','@','#','$','%','^','&','*','+','-','=','_','<','>','?',':','~'];
var pass = [];
var completedPass = [];

// This sets up the prompt that appears when the user clicks generate password. It allows the user to select what chracters are going to be allowed in there final password. This will also make sure that the user's password will be 8-128 characters
let passwordLength = prompt("How long would you like your password to be? Password must be between 8-128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8-128 characters");
    return ("Please start over!");
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

  // This allows the arrays to be combined when the condition selected at the prompt is true
  if(addupperCase === true) {
    pass = pass.concat(upperCase);
  }

  if(addlowerCase === true) {
    pass = pass.concat(lowerCase);
  }

  if(addupperCase === true) {
    pass = pass.concat(numberValue);
  }

  if(addupperCase === true) {
    pass = pass.concat(specialChars);
  }
// This allows the password to select a random string in the array and set it as the completed variable
  for (var i = 0; i < passwordLength; i++) {
   completedPass[i] = pass [Math.floor(Math.random() *pass.length)];

  }
// this returns the completed password and displays it in the box when completed. The .join("") combines all the strings together so that there are no comma's in between the final password
  return completedPass.join("");

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
