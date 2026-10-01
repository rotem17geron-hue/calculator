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
    document.getElementById("screen").innerHTML = value;
}

function buttonPress () {

}

const buttons = [['AC', "", "", ":"], ["7", "8", "9", "*"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], ["0", ".", "", "="]]

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
        cell.classList.add('cell')
        cell.innerHTML = buttons[rowNumber][index]
    }
}