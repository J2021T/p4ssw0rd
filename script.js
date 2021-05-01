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

  var result = [];
 
  var ucArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lcArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specArr = ["+", "-", "&", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":", "@", "#", "$", "%"];
 
  
  function pickChar() {
    var allowedChar = [];
    var ucRandom = ucArr[Math.floor(Math.random() * ucArr.length)];
    var lcRandom = lcArr[Math.floor(Math.random() * lcArr.length)];
    var numRandom = numArr[Math.floor(Math.random() * numArr.length)];
    var specRandom = specArr[Math.floor(Math.random() * specArr.length)];
    
    
    if (upperCase) {
      allowedChar.push(ucRandom);
    }
    if (lowerCase) {
      allowedChar.push(lcRandom);
    }
    if (numeric) {
      allowedChar.push(numRandom);
    }
    if (special) {
      allowedChar.push(specRandom);
    }
    var randChar = allowedChar[Math.floor(Math.random() * allowedChar.length)];

    return randChar;
  }
    
  for (var i = 0; i < length; i++) {
    result.push(pickChar());
  }

  return result.join('');
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
