// const categoriesArr = document.querySelectorAll(".item");

const categotiesList = document.querySelector('#categories');
const categoriesArr = categotiesList.children;

console.log(categoriesArr);
// Number of categories: 3

console.log(`Number of categories: ${categoriesArr.length}`);
console.log("");

const animals = categotiesList.firstElementChild;
const products = animals.nextElementSibling;
const technologies = products.nextElementSibling;


function nameOfCategorie(element) {
    return element.textContent;
};

function numberOfItems(element) { 
    return element.children.length;
};

console.log(`Category: ${nameOfCategorie(animals.firstElementChild)}`);
console.log(`Elements: ${numberOfItems(animals.lastElementChild)}`);
console.log("");
console.log(`Category: ${nameOfCategorie(products.firstElementChild)}`);
console.log(`Elements: ${numberOfItems(products.lastElementChild)}`);
console.log("");
console.log(`Category: ${nameOfCategorie(technologies.firstElementChild)}`);
console.log(`Elements: ${numberOfItems(technologies.lastElementChild)}`);
console.log("");

// function categoriesList(arr) {
//     let titleOfCategorie = "";
//     let numberOfitems = 0;

//     arr.forEach(element => {
//         titleOfCategorie = element.querySelector("h2").textContent;
//         numberOfitems = element.querySelector("ul").querySelectorAll('li').length;

        // console.log(`Category: ${titleOfCategorie}`);
        // console.log(`Elements: ${numberOfitems}`);
        // console.log("");
//     });
// }

// categoriesList(categoriesArr);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5