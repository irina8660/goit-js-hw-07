const listCategories = document.querySelector("#categories");
const listCategoriesItems = listCategories.querySelectorAll(".item");
console.log(`Number of categories: ${listCategoriesItems.length}`);

listCategoriesItems.forEach((item) => {
  const title = item.querySelector("h2").textContent; 
  const numOfElements = item.querySelectorAll("li").length;
  
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numOfElements}`);
});