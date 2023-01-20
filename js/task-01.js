// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).


const itemEl = document.querySelectorAll(".item");
console.log('Number of categories:', itemEl.length);

const ulList = document.querySelector("#categories")
const itemList = ulList.children

for (const element of itemList) {
    console.log("Categorie:" + element.querySelector("h2").textContent);
    console.log("Elements:", element.querySelector("ul").children.length);
}