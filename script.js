// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var numOfCharacters;
var useLowerCaseLtrs;
var useUpperCaseLtrs;
var numberChars;
var useSpecialChars;

var chosenChars = ""

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialChars = "!@#$%^&*()"


// Ask user how many characters should be in the password
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
  console.log("Your password will contain "+ numOfCharacters + " characters")
}

// Ask user if wanting to use lower case letters
function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  if (useLowerCaseLtrs === true){
    console.log("Your password will include lowercase letters.")
    chosenChars += lowercase

  } else {
    console.log("Your password will not contain lowercase letters.")
  }
}

// Ask user if wanting to use upper case letters
function useUpperCase(){
  useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  if (useUpperCaseLtrs === true){
    console.log("Your password will include uppercase letters.")
    chosenChars += uppercase

  } else {
    console.log("Your password will not contain uppercase letters.")
  }
}  

// Ask user if wanting to use numbers
function useNumbers(){
  useNumberChars = confirm("Do you want numbers in the password?");
  if (useNumberChars === true){
    console.log("Your password will include numbers.")
    chosenChars += numbers

  }else {
    console.log("Your password will not contain numbers.")
  }
}  

// Ask user if wanting ot use special characters
function useSpecialChars(){
  useSpecial = confirm("Do you want special characters in the password?");
  if (useSpecial === true){
    console.log("Your password will include special characters.")
    chosenChars += specialChars

  }
  else {
    console.log("Your password will not contain special characters.")
  }
}

function randomChars(pw) {
  var random = Math.floor(Math.random() * pw.length)
  var randomEl = pw[random]
  return randomEl
}


function generatePassword() {
  howManyCharacters();
  useLowerCase();
  useUpperCase();
  useNumbers();
  useSpecialChars();


  // chosenChars is all the characters ELIGIBLE to be in the password 
  // finalNum is how many characters the password should contain

  const charArray = chosenChars.split("");
  console.log(charArray)

  console.log(chosenChars)
  var finalNum = parseInt(numOfCharacters);
  console.log(finalNum)


  var finalPassword = []
 
  
  for(var i = 0; i< finalNum; i++){
    var possiblePw = randomChars(chosenChars);
    finalPassword.push(possiblePw)

    // generate a random number between 0 and the length of chosenChars
    // get character from string at random index value 
    // add that character to finalPassword
  }

  return finalPassword.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
