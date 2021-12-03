function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  return {
    name,
    price,
    type,
  };
}

function addIngredients(string, ingredients) {
  if(ingredients.indexOf(string) !== -1){
    return;
  } else{
    return ingredients.push(string);
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price * .9;
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type,
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
