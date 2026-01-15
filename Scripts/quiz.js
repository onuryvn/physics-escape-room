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
const answerButtons = answerButtonsElement.querySelectorAll(".answer-btn");

let currentQuestionIndex = 0;
let playerScore = 0;

function displayCurrentQuestion() {
  if (currentQuestionIndex === questions.length) {
    showFinalScore();
    return;
  }

  showNextQuestion();
}

function showFinalScore() {
  questionElement.style.display = "block";
  questionElement.textContent = `You scored: ${playerScore} out of ${questions.length}`;
  
  answerButtonsElement.style.display = "none";
  
  nextBtn.textContent = "Try again";
  nextBtn.style.visibility = "visible";
}

function showNextQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  
  questionElement.style.display = "block";
  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.q}`;
  
  answerButtonsElement.style.display = "flex";
  
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = currentQuestion.a[i];
    answerButtons[i].disabled = false;
    answerButtons[i].className = "answer-btn";
  }
  
  nextBtn.textContent = "Next";
  nextBtn.style.visibility = "hidden";
}

answerButtonsElement.addEventListener("click", (event) => {
  const clickedButton = event.target;
  
  if (!clickedButton.classList.contains("answer-btn")) return;
  if (clickedButton.disabled) return;
  
  const clickedAnswerIndex = Array.from(answerButtons).indexOf(clickedButton);
  const correctAnswerIndex = questions[currentQuestionIndex].correct;
  
  if (clickedAnswerIndex === correctAnswerIndex) {
    playerScore++;
  }
  
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].disabled = true;
    
    if (i === correctAnswerIndex) {
      answerButtons[i].classList.add("correct");
    } else {
      answerButtons[i].classList.add("incorrect");
    }
  }
  
  nextBtn.style.visibility = "visible";
});

nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex === questions.length) {
    currentQuestionIndex = 0;
    playerScore = 0;
  } else {
    currentQuestionIndex++;
  }
  
  displayCurrentQuestion();
});

displayCurrentQuestion();