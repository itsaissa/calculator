function add(a,b){return a+b;}
function subtract(a,b){return Math.abs(a-b)} 
function multiply(a,b){return a*b}
function divide(a,b){return (a/b).toFixed(4)}

function operate(operator, a,b){
    let val = undefined;
    switch(operator){
        case "+":
            val = add(a,b);
            break;
        case "-":
            val = subtract(a,b);
            break;
        case "*":
            val = multiply(a,b);
            break;
        case "/":
            val = divide(a,b);
            break;
    }
    return val;
}