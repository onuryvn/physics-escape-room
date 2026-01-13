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