let calculatorState = "default";
let number;
let operation;
let currentNumber;
let trailingNumber;
let operator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    divide: function(a,b){
        if (b !== 0) {
            return a / b;
        } else {
            const results = document.getElementById("results");
            results.textContent = "You cannot divide by zero.";
            return NaN;
        }
    },
    multiply: function(a,b){
        return a * b;
    },
};

function operate(number1, number2, operation) {
    switch (operation) {
        case "+":
            return operator.add(number1, number2);
        case "-":
            return operator.subtract(number1, number2);
        case "/":
            return number2 !== 0 ? operator.divide(number1, number2) : null; // Check for division by zero
        case "*":
            return operator.multiply(number1, number2);
        default:
            return null;
    }
}


function displayNumber(num) {
    const results = document.getElementById("results");
    if (calculatorState === "operandEntered") {
        results.textContent = num;
        calculatorState = "numberEntered";
    } else if (results.textContent === "0" || results.textContent === "NaN") {
        results.textContent = num;
        calculatorState = "numberEntered";
    } else {
        results.textContent += num;
    }
}

const btns = document.querySelectorAll("#keypad button");

btns.forEach((button) => {
    button.addEventListener("click", function (e) {
        const displayNum = e.target.innerText;
        displayNumber(displayNum);
    });
});

const clearButton = document.getElementById("allClear");
clearButton.addEventListener("click", () => {
    const results = document.getElementById("results");
    const upperScreen = document.getElementById("screen");
    results.textContent = "0";
    upperScreen.textContent = "0";
    calculatorState = "default";
    currentNumber = 0;
    trailingNumber = 0;
});

const operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach((button) => {
  button.addEventListener("click", function(e) {
    console.log(calculatorState)
    operation = e.target.innerText;
    let numberOnScreen = document.getElementById("results");
    if (currentNumber === undefined) {
      currentNumber = parseInt(numberOnScreen.innerText);
      numberOnScreen.textContent = operation;
    } else {
      trailingNumber = parseInt(numberOnScreen.innerText);
      console.log(currentNumber)
      console.log(trailingNumber)
      console.log(operation)
      currentNumber = operate(currentNumber, trailingNumber, operation);
      console.log(currentNumber)
      let upperScreen = document.getElementById("screen");
      upperScreen.textContent = currentNumber;
      numberOnScreen.textContent = operation;
    }
    
    calculatorState = "operandEntered";
    console.log(calculatorState)
  })
})

const equal = document.getElementById("equals");

