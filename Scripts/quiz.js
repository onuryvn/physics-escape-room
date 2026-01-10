const questions = [
  {
    question: "How strong is Earth's gravitational pull?",
    answers: [
      { text: "9,81 m/s²", correct: true },
      { text: "10,81 m/s²", correct: false },
      { text: "8,81 m/s²", correct: false },
      { text: "7,81 m/s²", correct: false },
    ]
  },
  {
    question: "When was the electron discovered?",
    answers: [
      { text: "1687", correct: false },
      { text: "1925", correct: false },
      { text: "2012", correct: false },
      { text: "1897", correct: true },
    ]
  },
  {
    question: "Which scientist is known for the theory of relativity?",
    answers: [
      { text: "Napoleon Bonaparte", correct: false },
      { text: "Patrick Star", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "John Cena", correct: false },
    ]
  },
  {
    question: "Why does a pendulum eventually stop swinging?",
    answers: [
      { text: "Because gravity disappears", correct: false },
      { text: "Because energy is lost to air resistance and friction", correct: true },
      { text: "Because the mass becomes smaller", correct: false },
      { text: "Because the string gets shorter", correct: false },
    ]
  },
  {
    question: "What is physics?",
    answers: [
      { text: "A science that explains how nature works", correct: true },
      { text: "A sport played with a ball", correct: false },
      { text: "A type of music", correct: false },
      { text: "A kind of food", correct: false },
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.visibility = "hidden";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.visibility = "visible";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.visibility = "visible";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

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