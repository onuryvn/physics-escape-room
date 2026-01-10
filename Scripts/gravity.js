// curtain menu
let burger_button = document.querySelector('.burger-button');

let toggle = false;

function changeButton() {
  slideDownNav();
  burger_button.innerHTML = '&times;';
  burger_button.style.fontSize = '36px';
}

function resetButton() {
  slideUpNav();
  burger_button.innerHTML = '&#9776;';
  burger_button.style.fontSize = '24px';
}

burger_button.addEventListener("click", () => {
  if(toggle) {
    resetButton();
  } 
  else {
    changeButton();
  }
  toggle = !toggle; // change value
});

function slideDownNav() {
  document.getElementById("nav-mobile").style.height = "100%";
}

function slideUpNav() {
  document.getElementById("nav-mobile").style.height = "0%";
}
// /curtain menu

// apple fall animation
const gravityValue = document.getElementById("gravity-value")
const apple = document.getElementById("apple");

let hasFallen = false;

if (apple) {
  apple.addEventListener("click", () => {
    if (!hasFallen) {
      apple.classList.add("fall");
      hasFallen = true;
    if (gravityValue){
      gravityValue.textContent = "9.81";
      gravityValue.style.fontWeight = "bold";
    }
    }
  });
}
// /apple fall animation