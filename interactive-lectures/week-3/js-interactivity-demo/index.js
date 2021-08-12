console.log("hello world!");

let count = 0;
const counterText = document.querySelector("#counter");

function increase() {
  count++;
  counterText.textContent = count;
}

function decrease() {
  count--;
  counterText.textContent = count;
}

function reset() {
  count = 0;
  counterText.textContent = count;
}

const plusBtn = document.querySelector("#plus-btn");
const minusBtn = document.querySelector("#minus-btn");
const resetBtn = document.querySelector("#reset-btn");

plusBtn.addEventListener("click", increase);
minusBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);

// console.log(counterText);

// Theme switcher below:

function selectTheme(event) {
  //   console.log(event.target);
  const theme = event.target.textContent;

  const body = document.querySelector("body");
  const main = document.querySelector("main");

  body.className = theme;
  main.className = theme;
}
// const firstButton = document.querySelector(".theme-buttons");
const buttons = document.querySelectorAll(".theme-buttons");

// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener("click", selectTheme);
}
