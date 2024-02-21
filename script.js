// Assignment code here





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

function generatePassword(){
var passwordLength = prompt("Enter length of password"); 
if (passwordLength < 8 || passwordLength > 128 ){
    alert("password must be greater than 8 characters and less than 128 characters")
    return 
}
var upperCaseletters = confirm("Would you like uppercase characters?")
var lowerCaseletters = confirm("Would you like lowercase characters?")
var specialcharacters = confirm("Would you like to use special characters?")
var numericcharacters = confirm("Would you like numeric characters?")


    return "hello"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);