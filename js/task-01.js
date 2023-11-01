const categoriesList = document.querySelector("#categories");
const categoryItem = document.querySelectorAll('.item');
console.log(categoryItem);

function taskCat(item) {
  console.log("Number of categories:", item.length);
  
item.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
}
taskCat(categoryItem);
