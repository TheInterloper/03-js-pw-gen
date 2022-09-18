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
  console.log("Your password will contain "+ numOfCharacters + " characters")
}

// Ask user if wanting to use lower case letters
function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
  if (useLowerCaseLtrs === true){
    console.log("Your password will include lowercase letters.")
    var low=getRandom(lowercase)
    chosenChars = chosenChars + low
    console.log(chosenChars)
  } else {
    console.log("Your password will not contain lowercase letters.")
  }
}

// Ask user if wanting to use upper case letters
function useUpperCase(){
  useUpperCaseLtrs = confirm("Do you want upper case letters in the password?");
  if (useUpperCaseLtrs === true){
    console.log("Your password will include uppercase letters.")
    var up=getRandom(uppercase)
    chosenChars = chosenChars + up
    console.log(chosenChars)
  } else {
    console.log("Your password will not contain uppercase letters.")
  }
}  

// Ask user if wanting to use numbers
function useNumbers(){
  useNumberChars = confirm("Do you want numbers in the password?");
  if (useUpperCaseLtrs === true){
    console.log("Your password will include numbers.")
    var num=getRandom(numbers)
    chosenChars = chosenChars + num
    console.log(chosenChars)
  }else {
    console.log("Your password will not contain numbers.")
  }
}  

// Ask user if wanting ot use special characters
function useSpecialChars(){
  useSpecial = confirm("Do you want special characters in the password?");
  if (useSpecial === true){
    console.log("Your password will include special characters.")
    var spec=getRandom(specialChars)
    chosenChars = chosenChars + spec
    console.log(chosenChars)
  }
  else {
    console.log("Your password will not contain special characters.")
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
