
const sizeElem = document.querySelector('#font-size-control');
const spanElem = document.querySelector('#text');
sizeElem.addEventListener('input', onSizeElemChange);

function onSizeElemChange(event) {
    const size = event.target.value;
    spanElem.style.fontSize = `${size}px`;
  }


