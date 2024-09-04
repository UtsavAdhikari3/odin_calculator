
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

const buttons = document.querySelectorAll(".buttons button")
const output = document.querySelector(".output output")
const operators = document.querySelectorAll(".operators button")


function getOperand1(){
    let displayValue = '';
    let operand1 = '';
    buttons.forEach((element)=>{
        element.addEventListener("click",()=>{
            if(displayValue.length === 0){
                operand1 = displayValue + element.textContent;
            }
        })
    })
}


function getOperator(operand1){
    operators.forEach((element)=>{
        element.addEventListener("click",()=>{
            if(operand1.length === 0){
                return NaN;
            }
            else{
                displayValue = operand1 + element.textContent;
                console.log(displayValue);
            }
        })
    })
}

function getOperator2(displayValue){
    buttons.forEach(element=>{
        element.addEventListener("click",()=>{
            if(displayValue.length === 0){
                return NaN;
            }
            else{
                displayValue = displayValue + element.textContent
            }
        })
    })
}




