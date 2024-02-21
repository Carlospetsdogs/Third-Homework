// Assignment code here





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

var upperArray = ["A", "B", "C"]
var lowerArray = ["a", "b", "c"]
var numArray = ["1", "2", "3"]
var specialArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
var selectedCharacters = []

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

if (upperCaseletters === true){
    selectedCharacters = selectedCharacters.concat(upperArray);
}
if (lowerCaseletters === true){
    selectedCharacters = selectedCharacters.concat(lowerArray);
}
if (numericcharacters === true){
    selectedCharacters = selectedCharacters.concat(numArray);
}
if (specialcharacters === true){
    selectedCharacters = selectedCharacters.concat(specialArray);
}
console.log(selectedCharacters)
    return "hello"
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);