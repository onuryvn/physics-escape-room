const questions = [
  {
    q: "How strong is Earth's gravitational pull?",
    a: ["9,81 m/s²", "10,81 m/s²", "8,81 m/s²", "7,81 m/s²"],
    correct: 0
  },
  {
    q: "When was the electron discovered?",
    a: ["1687", "1925", "2012", "1897"],
    correct: 3
  },
  {
    q: "Which scientist is known for the theory of relativity?",
    a: ["Napoleon Bonaparte", "Patrick Star", "Albert Einstein", "John Cena"],
    correct: 2
  },
  {
    q: "Why does a pendulum eventually stop swinging?",
    a: [
      "Because gravity disappears",
      "Because energy is lost to air resistance",
      "Because the mass becomes smaller",
      "Because the string gets shorter"
    ],
    correct: 1
  },
  {
    q: "What is physics?",
    a: [
      "A science that explains how nature works",
      "A sport played with a ball",
      "A type of music",
      "A kind of food"
    ],
    correct: 0
  }
];

const questionElement = document.getElementById("quiz-question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const buttons = answerButtonsElement.querySelectorAll(".answer-btn");

let index = 0;
let score = 0;

function showQuestion() {
  if (index == questions.length) {
    questionElement.style.display = "block";
    questionElement.textContent = `You scored: ${score} out of ${questions.length}`;
    answerButtonsElement.style.display = "none";
    nextBtn.textContent = "Try again";
    nextBtn.style.visibility = "visible";
    return;
  }

  questionElement.style.display = "block";
  answerButtonsElement.style.display = "flex";
  nextBtn.textContent = "Next";
  nextBtn.style.visibility = "hidden";

  questionElement.textContent = (index + 1) + ". " + questions[index].q;

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].textContent = questions[index].a[i];
    buttons[i].disabled = false;
    buttons[i].className = "answer-btn";
  }
}

answerButtonsElement.addEventListener("click", (e) => {
  const btn = e.target;
  if (!btn.classList.contains("answer-btn") || btn.disabled) return;

  const correctIndex = questions[index].correct;
  const clickedIndex = Array.from(buttons).indexOf(btn);

  if (clickedIndex === correctIndex) {
    score++;
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].classList.add(i === correctIndex ? "correct" : "incorrect");
  }

  nextBtn.style.visibility = "visible";
});

nextBtn.addEventListener("click", () => {
  if (index === questions.length) {
    // Restart quiz
    index = 0;
    score = 0;
  } else {
    index++;
  }
  showQuestion();
});

showQuestion();