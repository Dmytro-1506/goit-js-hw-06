function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesDiv = document.querySelector('#boxes');
const input = document.querySelector('input');

let numberOfBoxes = 0;

input.addEventListener('change', () => {
  numberOfBoxes = input.value;
  console.log(numberOfBoxes);
});

createBtn.addEventListener('click', () => {
  createBoxes(numberOfBoxes);
});

function createBoxes(numberOfBoxes) {
  destroyBoxes();
  const boxesArr = [];
  for (let i = 1; i <= numberOfBoxes; i += 1) {
    const colorOfBox = getRandomHexColor();
    let box = document.createElement('div');
    box.setAttribute('style', `background-color: ${colorOfBox}; width: ${(30 + (i - 1) * 10)}px;  height: ${(30 + (i - 1) * 10)}px`);
    boxesArr.push(box);
  };
  boxesDiv.append(...boxesArr);
}

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  boxesDiv.innerHTML = '';
};
