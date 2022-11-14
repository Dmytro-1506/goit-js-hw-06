function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
    box.setAttribute('style', `background-color: ${colorOfBox}`);
    boxesArr.push(box);
  };
  boxesArr.map((elem, index) => {
    elem.setAttribute('width', `${(30 + index * 10)}px`);
    elem.setAttribute('height', `${(30 + index * 10)}px`);
  });
  boxesDiv.append(...boxesArr);
}

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function destroyBoxes() {
  boxesDiv.innerHTML = '';
};
