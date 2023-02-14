// Assignment code here
var upperCasedharacters = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCaseLetters = ['a', 'b', 'c', 'd' , 'e', 'f', 'g', 'h', 'i', 'j','k','l','m','n','o','p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y','z']
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_','-', '=', '+']
var password = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  // prompt for password criteria
  //    1. password length 8 to 128 char.
  var passwordlength = prompt("How many character do you want in your password?\nChoose between 8 and 128.")
  if(passwordlength <= 7 || passwordlength >= 129){
    alert("Please choose a number in the given range.");
       
  }else{
    alert("You chose to make your password " + passwordlength + " characters long!");
  }

  }
  console.log(passwordlength)

  var letters = confirm("Do you want to include letters in your password?")
  if (letters == true){
    password = password.concat(lowerCaseLetters);
  } 
  console.log(password);
  var upperLetters = confirm("Do you also want upper case letter in your password?")
  if(upperLetters == true){
    password = password.concat(upperCasedharacters)
  }
  console.log(password);
  var speChar = confirm('Do you want special characters in your password?')
  if(speChar == true){
    password = password.concat(specialCharacters)}
    console.log(password);
  var num = confirm("Do you want to include numbers?")
  if(num == true){
    password = password.concat(numericCharacters)
  }
  console.log(password);

  


  //       
  //    2. validate input. 
  //    3. generate password based on criteria.
  var lastPassword = [];
  for(let i = 0; i < passwordlength; i++){
    var randIndex = Math.floor(Math.random() * password.length);
    lastPassword.push(password[randIndex])
  }


  return lastPassword.join("");

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
