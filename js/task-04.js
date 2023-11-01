let counterValue = 0;

const counterSpan = document.querySelector("#counter");

const decrement = document.querySelector('[data-action = "decrement"]');
const increment = document.querySelector('[data-action = "increment"]');

increment.addEventListener("click", onIncrementClick);
decrement.addEventListener("click", onDecrementClick);

function  onIncrementClick() {
    counterValue += 1;
    counterSpan.textContent = counterValue;
}

function onDecrementClick () {
    counterValue -= 1;
    counterSpan.textContent = counterValue;
}
