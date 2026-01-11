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