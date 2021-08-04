console.log("hello world!");

let count = 0;

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

const minusBtn = document.querySelector("#minus-btn");
const plusBtn = document.querySelector("#plus-btn");
const resetBtn = document.querySelector("#reset-btn");

minusBtn.addEventListener("click", decrease);
plusBtn.addEventListener("click", increase);
resetBtn.addEventListener("click", reset);

let counterText = document.querySelector("#counter");

// Theme changer below

const selectTheme = (event) => {
  let theme = event.target.textContent;
  let body = document.querySelector("body");
  let main = document.querySelector("main");
  body.className = theme;
  main.className = theme;
};

let buttons = document.querySelectorAll(".theme-buttons");
console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", selectTheme);
}
