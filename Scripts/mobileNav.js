let burgerButton = document.querySelector('.burger-button');

let toggle = false;

function changeButton() {
  slideDownNav();
  burgerButton.innerHTML = '&times;';
  burgerButton.style.fontSize = '36px';
}

function resetButton() {
  slideUpNav();
  burgerButton.innerHTML = '&#9776;';
  burgerButton.style.fontSize = '24px';
}

burgerButton.addEventListener("click", () => {
  if(toggle) {
    resetButton();
  } 
  else {
    changeButton();
  }
  toggle = !toggle;
});

function slideDownNav() {
  document.getElementById("nav-mobile").style.height = "100%";
}

function slideUpNav() {
  document.getElementById("nav-mobile").style.height = "0%";
}