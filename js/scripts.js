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
  } else if (this.crust === "Thin Crust") {
    return this.basePrice() + 4;
  } else {
    return this.basePrice();
  }
}

Pizza.prototype.formatPrice = function() {
  return "$" + this.priceWithCrust() + ".00";
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let sizeSelected = document.getElementById("size").value;
  document.getElementById("sizeDisplay").innerText = sizeSelected;
  let crustSelected = document.querySelector("input[name='crust']:checked").value;
  document.getElementById("crustDisplay").innerText = crustSelected;
  let sauceSelected = document.getElementById("sauce").value;
  document.getElementById("sauceDisplay").innerText = sauceSelected;
  let cheeseSelected = document.querySelector("input[name='cheese']:checked").value;
  document.querySelector(".cheese").innerText = cheeseSelected;
  let meatSelected = document.getElementById("meat").value;
  document.querySelector(".meat").innerText = meatSelected;

  let pizza = new Pizza(sizeSelected, crustSelected);
  console.log(pizza.formatPrice());
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
})