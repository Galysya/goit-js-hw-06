const inputElem = document.querySelector('#validation-input');

inputElem.addEventListener('blur', onInputChange);
inputElem.addEventListener('focus', onInputFocus);

function onInputChange(event) {
    const inputLength = event.target.value.length;
    const inputSymbol = Number(inputElem.getAttribute('data-length'));
console.log(inputElem)

if (inputLength === inputSymbol) {
    
    event.target.classList.add('valid');
    console.log(inputLength);

}else{

    event.target.classList.add('invalid');
    console.log(inputLength);
}
}

function onInputFocus(event) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
}
