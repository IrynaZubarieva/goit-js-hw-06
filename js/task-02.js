const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");
const justAnArr = ingredients.map(ingredient =>{
  const productItem = document.createElement("li");
  productItem.classList.add("item");
  productItem.textContent = ingredient;
  //console.log(productItem);
  return productItem;
});

ingredientsRef.append(...justAnArr);
