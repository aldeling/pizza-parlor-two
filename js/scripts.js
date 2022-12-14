//Business Logic
function Pizza(size, crust, sauce, cheese, meat, greens, other) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.greens = greens;
  this.other = other;
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
  let greensSelected = document.querySelector("input[name='greens']:checked").value;
  document.querySelector(".greens").innerText = greensSelected;
  let otherSelected = document.getElementById("other").value;
  document.querySelector(".other").innerText = otherSelected;
  let pizza = new Pizza(sizeSelected, crustSelected, sauceSelected, cheeseSelected, meatSelected, greensSelected, otherSelected);
  document.querySelector(".total").innerText = pizza.formatPrice();
  document.getElementById("receipt").removeAttribute("class")
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
})