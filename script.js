function add (num1, num2){
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case ":":
            return divide(num1, num2);
    }
}

function updateDisplay (value) {
    currentDisplay = document.getElementById("screen").innerHTML;
    document.getElementById("screen").innerHTML = currentDisplay + value;
}

function clearDisplay(){
    document.getElementById("screen").innerHTML = "";
}

function numberPressed(button){
    if (freshStart) {
        updateDisplay(button);
        if (operator === "") {
            num1 = num1 + button;
        } else {
            num2 = num2 + button;
        }   
    } else {
        clearDisplay();
        updateDisplay(button);
        num1 = button;
        freshStart = true;
    }
    
}

function operatorPressed(button){
    freshStart = true;
    if (operator === "") {
        updateDisplay(button);
        operator = button;
    } else {
        const result = operate(num1, num2, operator);
        clearDisplay();
        num1 = `${result}`;
        num2 = "";
        operator = button;
        updateDisplay(result + button);
    }
}

function equalsPressed(){
    const result = operate(num1, num2, operator);
    clearDisplay();
    updateDisplay(result);
    num1 = result;
    num2 = "";
    operator = "";
    freshStart = false;
}

function buttonPress (button) {
    switch (true) {
        case button === "":
            break;

        case /AC/.test(button):
            clearDisplay();
            num1 = "";
            num2 = "";
            operator = "";
            freshStart = true;
            break;

        case operatorsRegex.test(button):
            if ((num1 !== "" && operator === "") || (num1 !== "" && operator !== "" && num2 !== "")) {
                operatorPressed(button);
            }
            break;

        case /=/.test(button):
            if (num2 !== "") {
                equalsPressed();
            }
            break;
        
        default:
            numberPressed(button);
            break;
    }

    //debugging
    console.log(`num1: ${num1}`)
    console.log(`num2: ${num2}`)
    console.log(`operator: ${operator}`)
}

const buttons = [['AC', "", "", ":"], ["7", "8", "9", "*"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], ["0", ".", "", "="]]
const operatorsRegex = /\+|\-|\*|\:/;

let num1 = "";
let num2 = "";
let operator = "";
let freshStart = true;

let grid = document.createElement("div");
document.body.appendChild(grid);
grid.classList.add('grid');

for (let rowNumber = 0; rowNumber < 5; rowNumber++) {
    const row = document.createElement("div");
    grid.appendChild(row)
    row.classList.add('row')

    for (let index = 0; index < 4; index++) {
        const cell = document.createElement("div");
        row.appendChild(cell);
        cell.classList.add('cell');
        cell.innerHTML = buttons[rowNumber][index];
        cell.addEventListener('click', function(){
            buttonPress(cell.innerHTML);
        });
    }
}