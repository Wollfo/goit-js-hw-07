const categories = document.querySelectorAll(".item");
function getCategoriesListNumber() {
  return `Number of categories: ${categories.length}`;
}
console.log(getCategoriesListNumber());

categories.forEach((category) => {
  const heading = category.querySelector("h2");
  const headingText = heading.textContent;
  const element = category.querySelectorAll("li");
  const elementNumber = element.length;
  console.log(`Category: ${headingText}`);
  console.log(`Elements: ${elementNumber}`);
});
