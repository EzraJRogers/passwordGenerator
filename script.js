var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

const upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const lowerCase = ("abcdefghijklmnopqrstuvwxyz");
const numeric = ("1234567890");
const special = ("!#$%&'()*+,-./:;<=>?@[\]^_`{|}~");

function writePassword() {
  console.log(document.getElementById("lowercaseYN").checked)

   let includeLowercase = document.getElementById("lowercaseYN").checked;
   let includeUppercase = document.getElementById("lowercaseYN").checked;
   let includeNumbers = document.getElementById("lowercaseYN").checked;
   let includeSpecial = document.getElementById("lowercaseYN").checked;
   let passwordLength = document.getElementById("quantity").value;
   let allowedChars = "";
   let password = "";

   allowedChars += includeLowercase ? lowerCase : "";
   allowedChars += includeUppercase ? upperCase : "";
   allowedChars += includeNumbers ? numeric : "";
   allowedChars += includeSpecial ? special : "";

  if(allowedChars.length === 0) {
    window.alert("At least 1 password criteria must be selected");
    return
  }

  for(let i=0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
  
  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword)