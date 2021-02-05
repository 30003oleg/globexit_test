let formButton = document.querySelector('form button');
let colorInput = document.querySelector('#cellColor');
let cellNumInput = document.querySelector('#cellNumber');
let chosenColor = colorInput.value;
let chosenCell = cellNumInput.value;

colorInput.addEventListener('change', () => chosenColor = colorInput.value);
cellNumInput.addEventListener('change', () => chosenCell = cellNumInput.value);
formButton.addEventListener('click', () => inputCheck(chosenCell));

function tableChange(Color, Cell) {
    for (let i = 1; i < 13; i++) {
        if (i == Cell) {
            document.querySelector('table #cell' + [i]).style.backgroundColor = "#ffffff";
        } else {
            document.querySelector('table #cell' + [i]).style.backgroundColor = Color;
        }
    }
}
function inputCheck(chosenCell) {
    (chosenCell > 0 && chosenCell < 13) ? tableChange(chosenColor, chosenCell) : alert('Указанный номер ячейки должен быть в диапазоне 1-12');
}

