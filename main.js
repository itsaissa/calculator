let operator = '';
let previousNumber = '';
let currentNumber = '';

document.addEventListener("DOMContentLoaded", () => {
    const eraseBtn = document.querySelector("#clear");
    const equalBtn = document.querySelector(".equal");
    const decimalBtn = document.querySelector(".decimal");
    const numberBtns = document.querySelectorAll(".number");
    const operatorBtns = document.querySelectorAll(".operator");

    const previous = document.querySelector(".first");
    const current = document.querySelector(".second");

    numberBtns.forEach((numberBtn) => numberBtn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
        current.textContent = currentNumber;
    }))

    operatorBtns.forEach((op) => op.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
        previous.textContent = previousNumber + " " + operator;
        current.textContent = currentNumber;
    }))

    eraseBtn.addEventListener(("click"), () => {
        previousNumber = '';
        currentNumber = '';
        operator = '';
        current.textContent = '';
        previous.textContent = '';
    })

    equalBtn.addEventListener("click", () => {
        if(currentNumber != '' && previousNumber != '')
        operate()
        previous.textContent = '';
        if(previousNumber.length <= 5){
            current.textContent = previousNumber;
        } else{
            current.textContent = previousNumber.slice(0,5) + "..."
        }
        
    })

    decimalBtn.addEventListener("click", () => {
        addDecimal();
        current.textContent = currentNumber;
    })

})

function handleNumber(num){
    if(currentNumber.length <= 5){
        currentNumber += num;
    }
}

function handleOperator(op){
    operator= op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function addDecimal(){
    if(!currentNumber.includes(".")){
        currentNumber += ".";
    }
}


function add(a,b){return a+b;}
function subtract(a,b){return Math.abs(a-b)} 
function multiply(a,b){return a*b}
function divide(a,b){return (a/b).toFixed(2)}

function operate(){
    previousNumber = Number(previousNumber);
    currentNumber = Number(currentNumber);
    let val = undefined;
    switch(operator){
        case "+":
            val = add(previousNumber, currentNumber);
            break;
        case "-":
            val = subtract(previousNumber, currentNumber);
            break;
        case "X":
            val = multiply(previousNumber, currentNumber);
            break;
        case "/":
            val = divide(previousNumber, currentNumber);
            break;
        default:
            console.log("ERROR");
    }
    console.log(val);
    previousNumber = val.toString();
    currentNumber = val.toString();
}