// Assignment code here

// 1. handle button click, you need to create a click event using the addEventListener for this generate button
// 2. display - window.prompt() to ask the user for size of the password
// 3. validate - only numbers and size of password, the range  >8 and <128
// 4. prompt- window.confirm()  to ask user for ok or cancel for the type of password
// 5. You need 4 confirms, each confirm represents the type of character in the password
var generatePassword = function () {
  var finalPassword = "" //finalPassword.length
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var specialCharcters = "&^%$#"
  var number = "0123456789"
  var passwordsize = parseInt(prompt("How many characters would you like your password to contain?"), 10)
  console.log(passwordsize)
  if (passwordsize < 8 || passwordsize > 128) {
    window.alert("The password length does not meet the requirements.")
    return
  }
  var isLowerCase = confirm("Does your password include lowercase letters?")
  
  var isUpperCase = confirm("Does your password include uppercase letters?")
  
  var isSpecialCharacter= confirm("Does your password include special characters?")
  
  var isNumber = confirm("Does your password include numbers?")
  console.log(isLowerCase, isUpperCase, isSpecialCharacter, isNumber)
  
  // ending 
  while (finalPassword.length < passwordsize) {

  if (isLowerCase) {
    var randomPickLowerCase = Math.floor(Math.random() * lowercase.length)
    var pickOneLowerCaseLetter = lowercase.charAt(randomPickLowerCase)
    finalPassword = finalPassword + pickOneLowerCaseLetter
    index++;
    if (index < passwordsize.length) {
     } else {
        return finalPassword
      }
  }
  if(isUpperCase){
    var randomPickUpperCase = Math.floor(Math.random() * uppercase.length)
    var pickOneUpperCaseLetter = uppercase.charAt(randomPickUpperCase)
    finalPassword = finalPassword + pickOneUpperCaseLetter
    index++;
    if (index < passwordsize.length) {
     } else {
        return finalPassword
      }
  }
  if(isSpecialCharacter){
    var randomPickSpecial = Math.floor(Math.random() * specialCharcters.length)
    var pickOneSpecialCharacter = specialCharcters.charAt(randomPickSpecial)
    finalPassword = finalPassword + pickOneSpecialCharacter
    index++;
    if (index < passwordsize.length) {
     } else {
        return finalPassword
      }
  }
  if(isNumber){
    var randomPickNumber = Math.floor(Math.random() * number.length)
    var pickOneNumber = number.charAt(randomPickNumber)
    finalPassword = finalPassword +  pickOneNumber
    index++;
    if (index < passwordsize.length) {
     } else {
        return finalPassword
      }
    }
  }
  console.log(pickOneLowerCaseLetter, pickOneUpperCaseLetter, pickOneSpecialCharacter, pickOneNumber)
  return finalPassword
}
// Assignment Code

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
