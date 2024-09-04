let operand1 = 0;
let operator = "";
let operand2 = 0;


function add(operand1,operand2){
    return operand1 + operand2;
}

function subtract(operand1, operand2){
    return operand1 - operand2;
}

function multiply(operand1, operand2){
    return operand1 * operand2;
}

function divide(operand1, operand2){
    return (operand1 / operand2).toFixed(2);
}

function operate(operand1, operand2){
    switch(operator){
        case "+":
            add(operand1,operand2);
            break;
        case "-":
            subtract(operand1,operand2);
            break;
        case "*":
            multiply(operand1,operand2);
            break;
        case "/":
            divide(operand1,operand2);
            break;
    }
}

const buttons = document.querySelectorAll(".buttons button");
const output = document.querySelector(".output");

const displayValue = Array.from(buttons).map(button => {
    button.addEventListener("click",()=>{
         console.log(button.textContent);
    });
});

