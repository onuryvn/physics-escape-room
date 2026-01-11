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

// gallery slideshow
let currentSlide = 0;

showNextSlide();

function showNextSlide() {
    let allSlides = document.getElementsByClassName("gallery-item");
    
    for (let slideNumber = 0; slideNumber < allSlides.length; slideNumber = slideNumber + 1) {
        allSlides[slideNumber].style.display = "none";
    }
    
    currentSlide = currentSlide + 1;
    
    if (currentSlide > allSlides.length) {
        currentSlide = 1;
    }
    
    allSlides[currentSlide - 1].style.display = "block";
    
    setTimeout(showNextSlide, 3000);
}
// /gallery slideshow