let color = document.querySelector("#color");
let place = document.querySelector("#place");
let ritual = document.querySelector("#ritual");

function myColor() {
  alert("My favorite color is YELLOW!");
}
function myPlace() {
  alert("My favorite place is NEW ZEALAND!");
}
function myRitual() {
  alert("My favorite ritual is PRAYER!");
}

color.addEventListener("click", myColor);
place.addEventListener("click", myPlace);
ritual.addEventListener("click", myRitual);
