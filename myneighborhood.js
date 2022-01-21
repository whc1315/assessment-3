let randRest = document.querySelector("#food");

function myFood() {
  let rest = [
    "Dog Haus",
    "Yard House",
    "Fuddruckers",
    "Olive Garden",
    "PaLa Downtown",
    "Via Della Slice Shop",
    "Bacanora PHX",
    "Testal Mexican Kitchen",
    "Carolinas",
  ];
  let randomElement = rest[Math.floor(Math.random() * rest.length)];
  alert(randomElement);
}

randRest.addEventListener("click", myFood);
