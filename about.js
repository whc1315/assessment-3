console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form has been submitted!");
  // console.log('form submit');
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

function catCompliment() {
  alert("Your hair looks nice!");
}

let pic = document.querySelector("img#cat");

pic.addEventListener("mouseover", catCompliment);
