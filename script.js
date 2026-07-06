//operator variables
let firstNum = "";
let secondNum = "";
let operator = "";

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

function modulus(a, b) {
  return a % b;
}

//update calculator screen
function updateScreen() {
  const results = document.querySelector(".results");
  if (secondNum !== "") {
    results.textContent = firstNum + " " + operator + " " + secondNum;
  } else if (operator !== "") {
    results.textContent = firstNum + " " + operator;
  } else if (firstNum !== "") {
    results.textContent = firstNum;
  } else {
    results.textContent = "0";
  }
}

function operate(a, b, op) {
  const parsedFirst = parseFloat(a);
  const parsedSecond = parseFloat(b);

  switch (op) {
    case "+":
      return add(parsedFirst, parsedSecond);
    case "-":
      return substract(parsedFirst, parsedSecond);
    case "*":
      return multiply(parsedFirst, parsedSecond);
    case "/":
      return divide(parsedFirst, parsedSecond);

    case "%":
      return modulus(parsedFirst, parsedSecond);
  }
}

function handleDecimals(num) {
  const numStr = num.toString();
  if (numStr.includes(".")) {
    if (numStr.split(".")[1].length > 8) {
      return Math.round(num * 10 ** 8) / 10 ** 8;
    }
  }
  return num;
}

function handleClick(e) {
  if (e.target.dataset.number) {
    const clickedNumber = e.target.dataset.number;

    if (!operator) {
      if (clickedNumber === "." && firstNum.includes(".")) {
        return;
      }
      firstNum += clickedNumber;
    } else {
      if (clickedNumber === "." && secondNum.includes(".")) {
        return;
      }

      secondNum += clickedNumber;
    }
  }
  if (e.target.dataset.operator) {
    const clickedOperator = e.target.dataset.operator;
    if (firstNum && secondNum && operator) {
      const rawResult = operate(firstNum, secondNum, operator);
      result = handleDecimals(rawResult);
      firstNum = result.toString();
      secondNum = "";
      operator = clickedOperator;
    } else if (firstNum) {
      operator = clickedOperator;
    }
  }

  if (e.target.dataset.action) {
    const action = e.target.dataset.action;

    if (action === "equals") {
      if (firstNum && secondNum && operator) {
        const rawResult = operate(firstNum, secondNum, operator);
        result = handleDecimals(rawResult);
        firstNum = result.toString();
        firstNum = result.toString();
        secondNum = "";
        operator = "";
      }
    }
    if (action === "clear") {
      firstNum = "";
      secondNum = "";
      operator = "";
    }
    if (action == "delete") {
      if (firstNum && secondNum && operator) {
        secondNum = secondNum.slice(0, -1);
      } else if (firstNum && operator) {
        operator = "";
      } else if (firstNum) {
        firstNum = firstNum.slice(0, -1);
      }
    }
  }
  updateScreen();
}

const calcButtons = document.querySelectorAll(".btn-calc");
calcButtons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

const resultBtn = document.querySelector(".results");
resultBtn.addEventListener("click", operate);
