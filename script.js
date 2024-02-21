// Assignment code here





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// Number arrays and vaules

var upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowerArray = "abcdefghijklmnopqrstuvwxyz".split("")
var numArray = "1234567890".split("")
var specialArray = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("")
var selectedCharacters = []
var finalArray = []

function generatePassword(){
var passwordLength = prompt("Enter length of password"); 
if (passwordLength < 8 || passwordLength > 128 ){
    alert("password must be greater than 8 characters and less than 128 characters")
    return 
}
//Text prompts
var upperCaseletters = confirm("Would you like uppercase characters?")
var lowerCaseletters = confirm("Would you like lowercase characters?")
var specialcharacters = confirm("Would you like to use special characters?")
var numericcharacters = confirm("Would you like numeric characters?")

//If statements based on user input data 
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

for(var i = 0; i < passwordLength; i++){
    // grab random decimal based on length of selectedCharacter array and round down to whole number
    var randomIndex = Math.floor(Math.random() * selectedCharacters.length)
    var charValue = selectedCharacters[randomIndex]

    finalArray.push(charValue)
    console.log(finalArray)
}

    return finalArray.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);