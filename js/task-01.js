const categoriesArr = document.querySelectorAll(".item");
const categoriesArrLength = categoriesArr.length;

console.log(`Number of categories: ${categoriesArrLength}`);

const animals = document.querySelector(".item");

const title = categoriesArr[0].querySelector("h2").textContent;
// console.log(categoriesArr[0].querySelector("h2"));
console.log(`Category: ${title}`);



// console.log(categoriesArr);


// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5