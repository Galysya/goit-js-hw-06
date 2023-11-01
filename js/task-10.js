function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// const placeDiv = document.querySelector("#boxes");
// const addElem= document.querySelector("[data-create]");
// const remElem= document.querySelector ("[data-destroy]");

// function createBoxes(amount) {
//   let divwidth = 30;
//   let divheight = 30;
//   for (let index = 0; index <= amount; index++) {
//     const divElement = document.createElement ("div");
//     divElement.style.width = `{(divwidth += 10)}px`;
//     divElement.style.height = `{(divheight += 10)}px`;
//     divElement.style.backgroundColor= `${getRandomHexColor()}`;
//     placeDiv.append(divElement);
//   }
// }
// createBoxes(10);

// function onAddElemClick(event) {
  
// }

// galleries.insertAdjacentHTML( 'beforeend',    );
// function destroyBoxes(amount){
//   remove(divElement)
// };
