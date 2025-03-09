const categoriesList = document.querySelector("#categories");
const categories = document.querySelectorAll(".item");

console.log(`всего категорий: ${categories.length}`);
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const count = category.querySelectorAll("ul li").length;
  console.log(`название: ${title}`);
  console.log(`елементов: ${count}`);
});
