//Business Logic
function Pizza(size, crust) {
  this.size = size;
  this.crust = crust;
}

Pizza.prototype.basePrice = function() {
  if (this.size === "Small") {
    return 5;
  } else if (this.size === "Medium") {
    return 10;
  } else if (this.size === "Large") {
    return 15;
  } else if (this.size === "Extra Large") {
    return 20;
  }
}

Pizza.prototype.priceWithCrust = function() {
  if ((this.crust === "Deep Dish") || (this.crust === "Gluten Free")) {
    return this.basePrice() + 6;
  }
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let pizza = new Pizza("Small","Gluten Free");
  console.log(pizza.priceWithCrust());
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
})