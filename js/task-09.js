function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorElem = document.querySelector('.change-color');

const color = document.querySelector('.color');

colorElem.addEventListener('click', onColorElemChange);

function onColorElemChange(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}



