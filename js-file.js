let calculatorState = "default";
let number;
let operation;
let firstOperand;
let secondOperand;
const results = document.getElementById("results");
const upperScreen = document.getElementById("screen");

let operator = {
    add: function(a,b){
        return a + b;
    },
    subtract: function(a,b){
        return a - b;
    },
    divide: function(a,b){
        if (b !== 0) {
            return b / a;
        } else {
            alert("You cannot divide by zero.")
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
    results.textContent = "0";
    upperScreen.textContent = "0";
    calculatorState = "default";
    firstOperand = 0;
    secondOperand = 0;
});

const operandButtons = document.querySelectorAll(".operand");

operandButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        upperScreen.textContent = results.textContent;
        results.textContent = "0";
        operation = e.target.innerText;
        calculatorState ="operandEntered";
    })
})


const equalButton = document.querySelector("#equals");
equalButton.addEventListener("click", () => {
    secondOperand = parseInt(upperScreen.textContent);
    console.log(secondOperand)
    firstOperand = parseInt(results.textContent);
    console.log(firstOperand)
    let finalResult = operate(firstOperand, secondOperand, operation);
    console.log(finalResult)
    results.textContent = finalResult;
})

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", () =>{
    
    if (results.textContent === "0") {
        results.textContent = "0";
    } else {let deleted = parseInt(results.textContent).toString();
    deleted = deleted.slice(0, -1);
    console.log(deleted)
    results.textContent = deleted;};
    

    if (results.textContent === "" || results.textContent === NaN || results.textContent === "0") {
        results.textContent = 0;
    };
})