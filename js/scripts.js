//Business Logic
function Pizza(size) {
  this.size = size;
}

Pizza.prototype.basePrice = function() {
  if (this.size === "Small") {
    return 5;
  } else if (this.size === "Medium") {
    return 10;
  } else if (this.size === "Large") {
    return 15;
  }
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let pizza = new Pizza("Large");
  console.log(pizza.basePrice());
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
})