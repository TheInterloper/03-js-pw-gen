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


function getRandom(charType){
  var randomNum = Math.floor(Math.random() * charType.length)
  var randomChar=charType[randomNum]
  return randomChar
}

// Ask user how many characters should be in the password
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );

}

// Ask user if wanting to use lower case letters
function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  if (useLowerCaseLtrs === true){
    var low=getRandom(lowercase)
    chosenChars = chosenChars + low
  }
}

// Ask user if wanting to use upper case letters
function useUpperCase(){
  useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  if (useUpperCaseLtrs === true){
    var up=getRandom(uppercase)
    chosenChars = chosenChars + up
  }
}  

// Ask user if wanting to use numbers
function useNumbers(){
  useNumberChars = confirm("Do you want numbers in the password?");
  if (useUpperCaseLtrs === true){
    var num=getRandom(numbers)
    chosenChars = chosenChars + num
  }
}  

// Ask user if wanting ot use special characters
function useSpecialChars(){
  useSpecialChars = confirm("Do you want special characters in the password?");
  if (useUpperCaseLtrs === true){
    var spec=getRandom(specialChars)
    chosenChars = chosenChars + spec
  }
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  howManyCharacters();
  useLowerCase();
  useUpperCase();
  useNumbers();
  useSpecialChars();




  return ""
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
