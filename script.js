// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var numOfCharacters;
var useLowerCaseLtrs;
var useUpperCase;
var useNumbers;
var useSpecialChars;

var allChars = [];


// Ask user how many characters should be in the password
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
}

// Ask user if wanting to use lower case letters
function useLowerCase(){
  useLowerCaseLtrs = confirm("Do you want lower case letters in the password?");
}

// Ask user if wanting to use upper case letters
function useUpperCase(){
  useUpperCase = confirm("Do you want lower case letters in the password?");
}  

// Ask user if wanting to use numbers
function useNumbers(){
  useNumbers = confirm("Do you want lower case letters in the password?");
}  

// Ask user if wanting ot use special characters
function useSpecialChars(){
  useSpecialChars = confirm("Do you want lower case letters in the password?");
  
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  console.log("start here");
  howManyCharacters();
  useLowerCase();
  useUpperCase();
  useNumbers();
  useSpecialChars();




  return "finalpassword"
}











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
