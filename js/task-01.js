const categoriesArr = document.querySelectorAll(".item");

// Number of categories: 3

console.log(`Number of categories: ${categoriesArr.length}`);
console.log("");

function categoriesList(arr) {
    let titleOfCategorie = "";
    let numberOfitems = 0;

    arr.forEach(element => {
        titleOfCategorie = element.querySelector("h2").textContent;
        numberOfitems = element.querySelector("ul").querySelectorAll('li').length;

        console.log(`Category: ${titleOfCategorie}`);
        console.log(`Elements: ${numberOfitems}`);
        console.log("");
    });
}

categoriesList(categoriesArr);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5