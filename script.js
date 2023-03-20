var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordOptions = [];
  var finalPassword = [];
  var length = prompt(
    "Enter the number of characters you'd like for your new password (Select a number between 8-128)"
  );

  var hasNumbers = confirm("Would you like numbers in your password?");
  var hasLowerCase = confirm(
    "Would you like lower case letters in your password?"
  );
  var hasUpperCase = confirm(
    "Would you like upper case letters in your password?"
  );
  var hasSpecialCharacters = confirm(
    "Would you like special characters in your password?"
  );
  console.log(length);

  while (length < 8 || length > 128) {
    length = prompt("New password must be from 8-128 characters");
  }

  if (hasNumbers === true) {
    passwordOptions = passwordOptions.concat(numbers);
  }

  if (hasLowerCase === true) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }

  if (hasUpperCase === true) {
    passwordOptions = passwordOptions.concat(upperCase);
  }

  if (hasSpecialCharacters) {
    passwordOptions = passwordOptions.concat(specialCharacters);
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * passwordOptions.length);
    finalPassword.push(passwordOptions[randomIndex]);
  }
  return finalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
