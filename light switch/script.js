const button = document.querySelector("button");
const body = document.querySelector("body");

function toggleColor() {
  button.classList.toggle("button--dark");
  body.classList.toggle("body--dark");

  if (document.title !== "Good Morning") {
    document.title = "Good Morning";
  } else {
    document.title = "Good Night";
  }
}

button.addEventListener("click", toggleColor);
