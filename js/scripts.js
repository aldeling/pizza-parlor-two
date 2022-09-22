//Business Logic
function Pizza(size) {
  this.size = size;
}

Pizza.prototype.basePrice = function() {
  if (this.size === "Small") {
    return 5;
  }
}

//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  let pizza = new Pizza("Small");
  console.log(pizza.basePrice());
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
})