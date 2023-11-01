let inputValue = document.querySelector("#name-input");
let outputValue = document.querySelector("#name-output");

inputValue.addEventListener("input", oninputValueChange);

function oninputValueChange (event) {
        outputValue.textContent = event.target.value;

        if (inputValue.textContent = ''){
                return "Anonymous"
                }   
} 



