// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // prompt for password criteria
  //    1. password length 8 to 128 char.
  var passwordlength = prompt("How many character do you want in your password?\nChoose between 8 and 128.")
  if(passwordlength <= 7 || passwordlength >= 129){
    alert("Please choose a number in the given range.")
       
  }else{
    alert("You chose to make your password " + passwordlength + " characters long!");
  }

  var letters = confirm("Do you want to include letters in your password?")
  if (letters == true){
    var upperLetters = confirm("Do you also want upper case letter in your password?")
    if(upperLetters == true){
      alert("You will get both upper case and lower case letter." )
    }else {
      alert("You will only get lower case letters.")
    }
  }else{
    alert("Letters will not be included.")
  }
  //       
  //    2. validate input. 
  //    3. generate password based on criteria.
  
  return "Generated password will go here."

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
