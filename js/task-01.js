const categoties = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);
console.log("");

categoties.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
    console.log("");
});
