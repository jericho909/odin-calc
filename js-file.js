let calculatorState = "default";
let operator = {
    add: function(a,b){
        return a+b
    },
    substract: function(a,b){
        return a - b
    },
    divide: function(a,b){
        if (b !== 0) {
            return a / b
        } else {
            const screen = document.getElementById("screen");
            screen.textContent("You cannot divide by zero.");
        }
    },
    multiply: function(a,b){
        return a * b
    },
};

function operate(){
    const firstNumber = document.getElementById("screen");
}

function displayNumber(num) {
    const screen = document.getElementById("screen");
    if (calculatorState === "operandEntered") {
      screen.textContent = num;
      calculatorState = "numberEntered";
    } else if (screen.textContent === "0" || screen.textContent === "NaN") {
      screen.textContent = num;
      calculatorState = "numberEntered";
    } else {
      screen.textContent += num;
    }
  }
  
const btns = document.querySelectorAll("#keypad button");
  
btns.forEach((button) => {
    button.addEventListener("click", function (e) {
      const displayNum = e.target.innerText;
      displayNumber(displayNum);
      if (e.target.classList.contains("operand")) {
        calculatorState = "operandEntered";
      }
    });
  });

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    const screen = document.getElementById("screen");
    screen.textContent = "0";
    calculatorState = "default"; 
})

const operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach((button) => {
    button.addEventListener("click", function(e) {
        const screen = document.getElementById("screen");
        let number = parseFloat(screen.textContent);
        let newDisplay = e.target.innerText;
        screen.textContent = newDisplay;
        console.log(number)
    });
});

const equal = document.getElementById("equals");

equal.addEventListener("click")



