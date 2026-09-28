const buttons = [['AC', "(", ")", ":"], ["7", "8", "9", "*"], ["4", "5", "6", "-"], ["1", "2", "3", "+"], ["0", ".", "back", "="]]

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