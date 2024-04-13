//password elements
////////////////////////////////
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
lowerCase = "abcdefghijklmnopqrstuvwxyz",
numbers = "0123456789",
symbols = "@_|-[({({#  #}~&$ù:!;§%£/.?,*-/+=",
allCaracters = upperCase + lowerCase + numbers + symbols;
let length = 20;
//////////////////////////////////
const passwordsBox = document.getElementById("password");
const generatePasswordBtn = document.querySelector(".generate-btn");
const message = document.querySelector(".message-nonhover");
const copyEl = document.getElementById("copy-btn");

//hover event listeners
copyEl.addEventListener("mouseover", () => {
  message.classList.replace("message-nonhover", "message");
  message.textContent = "copy";
});
copyEl.addEventListener("mouseout", () => {
  message.classList.replace("message", "message-nonhover");
});
//generate password button generatePassword();
generatePasswordBtn.addEventListener("click", generatePassword);
//coppy password button copyPassword();
copyEl.addEventListener("click", copyPassword);
//generate password function
function generatePassword() {
  var password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (length > password.length) {
    password += allCaracters[Math.floor(Math.random() * allCaracters.length)];
  }
  passwordsBox.value = password;
}
//copy password function
function copyPassword() {
  message.textContent = "copied";
  passwordsBox.select();
  document.execCommand("copy");
}
