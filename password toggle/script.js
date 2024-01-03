//const button = document.querySelector("button");

const button = document.querySelector("#button");
const password = document.querySelector("#password");

button.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    button.innerText = "Hide Password";
  } else {
    password.type = "password";
    button.innerText = "Show Password";
  }
});
