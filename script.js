//operator variables
let firstNum;
let secondNum;
let finalNum;
let operator;

//basic math functions
function add(a, b) {
  return a + b;
}
console.log(add(3, 4));

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function clear() {}
/*
//update screen when different functions are called
function updateScreen(a, b, operator) {
  const results = document.querySelector(".results");
}
*/
function operate(a, b, op) {}

function handleClick(e) {
  if (e.target.dataset.number) {
    console.log(e.target.dataset.number);
  }
  if (e.target.dataset.operator) {
    console.log(e.target.dataset.operator);
  }
  if (e.target.dataset.action) {
    console.log(e.target.dataset.action);
  }
}

const calcButtons = document.querySelectorAll(".btn-calc");
calcButtons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

const resultBtn = document.querySelector(".results");
resultBtn.addEventListener("click", operate);
