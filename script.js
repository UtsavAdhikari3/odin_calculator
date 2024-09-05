let operand1 = "";
let operand2 = "";
let operator = "";
let display = "";


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
const output = document.querySelector(".output output");
const operators = document.querySelectorAll(".operators button");
const container = document.querySelector(".container");



// container.addEventListener("click",displayOutput)
console.log(displayOutput())







