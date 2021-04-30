// Assignment code here
function generatePassword() {
  var length = Number(prompt("What is your desired character length? Please enter a value from 8 to 128.")); 
  while (8 > length || length > 128) length = Number(prompt('You must enter a valid character length from 8 to 128.'));

  var upperCase = confirm("Would you like your password to contain uppercase letters?");
  var lowerCase = confirm("Would you like your password to contain lowercase letters?");
  var numeric = confirm("Would you like your password to contain numeric characters?");
  var special = confirm("Would you like your password to contain special characters?");

  while (!upperCase && !lowerCase && !numeric && !special) {
    alert("You must choose at least one character (uppercase, lowercase, numeric, and/or special) option.");
    upperCase = confirm("Would you like your password to contain uppercase letters?");
    lowerCase = confirm("Would you like your password to contain lowercase letters?");
    numeric = confirm("Would you like your password to contain numeric characters?");
    special = confirm("Would you like your password to contain special characters?");
  }

  var ucArr = ['QWERTYUIOPASDFGHJKLZXCVBNM'.split('')];
  var lcArr = ['qwertyuiopasdfghjklzxcvbnm'.split('')];
  var numArr = ['1234567890'.split('')];
  var specArr = [',<.>/?;:{}`~!@#$%^&*()-_=+'.split('')];
  var ucRandom = '';
  var lcRandom = '';
  var numRandom = '';
  var specRandom = '';

  if (upperCase) {
    ucRandom = ucArr[Math.floor(Math.random() * ucArr.length)];
  }
  if (lowerCase) {
    lcRandom = lcArr[Math.floor(Math.random() * lcArr.length)];
  }
  if (numeric) {
    numRandom = numArr[Math.floor(Math.random() * numArr.length)];
  }
  if (special) {
    specRandom = specArr[Math.floor(Math.random() * specArr.length)];
  }

  console.log(specRandom, numRandom, lcRandom, ucRandom);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
