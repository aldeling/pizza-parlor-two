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
//UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
}

window.addEventListener("load", function() {
  document.querySelector("form#pizza").addEventListener("submit", handleFormSubmission);
})