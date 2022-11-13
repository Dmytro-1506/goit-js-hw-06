function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('button');
const nameOfColor = document.querySelector('span');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  const newColor = getRandomHexColor();

  body.setAttribute('style', `background-color: ${newColor}`);
  nameOfColor.textContent = newColor;
  console.log(newColor);
  console.log('sdfg');
}