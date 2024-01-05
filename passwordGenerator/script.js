// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var passwordLength = prompt("How long do you want your password to be? (enter a number between 8 and 128)");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return null
  }

  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase= confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters? ($@%&*, etc)");

  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You have to select at least one character type.");
    return null;
  }

  return {
    length: passwordLength,
    lower: includeLowercase,
    upper: includeUppercase,
    numeric: includeNumeric,
    special: includeSpecial
  };
}

var options = getPasswordOptions();
console.log(options);

function finalArray() {
  var chosenOptions = [];

  if (options.lower === true) {
    chosenOptions = chosenOptions.concat(lowerCasedCharacters);
  }
  if (options.upper === true) {
    chosenOptions = chosenOptions.concat(upperCasedCharacters);
  }
  if (options.numeric === true) {
    chosenOptions = chosenOptions.concat(numericCharacters);
  }
  if (options.special === true) {
    chosenOptions = chosenOptions.concat(specialCharacters);
  }

  return chosenOptions
}

var finalArray = finalArray();
console.log(finalArray);


// Function for getting a random element from an array
function getRandom(arr) {

  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];

}

// Function to generate password with user input
function generatePassword() {
  
  var password = "";

  for (var i = 0; i < options.length; i++) {
    var char = getRandom(finalArray);
    password += char;
  }

  return password;
}

var pass = generatePassword();
console.log(pass);



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