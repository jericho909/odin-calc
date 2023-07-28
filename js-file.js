let firstNumber = 0;
let secondNumber = 0;
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
            console.log("You cannot divide by zero.")
        }
    },
    multiply: function(a,b){
        return a * b
    },
};

function operate(a,b){
    
}



