const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const contenitoreInput = document.getElementsByClassName("contenitore-risposte");

console.log(contenitoreInput);

const questionSelezionate = () => {
  for (let q = 0; q < questions.length; q++) {
    const question = questions[q].question;
    let questionRandom = function () {
      const domandaRandom = Math.floor(Math.random() * question);
      console.dir(questionRandom);
    };
  }
};
questionSelezionate();

const arrAnswers = () => {
  for (let i = 0; i < questions.length; i++) {
    const correctAnswer = questions[i].correct_answer;
    const incorrectAnswers = questions[i].incorrect_answers;
  }
};
arrAnswers();
/*const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainer = document.getElementsByClassName("question-container");

const questionElement = document.getElementById("question");
const optionButtons = document.getElementById("option-buttons");
// let shuffledQuestions, currentQuestionIndex;

// startButton.addEventListener("click", startQuiz);
// nextButton.addEventListener("click", () => {
//   currentQuestionIndex++;
//   setNextQuestion;
// });

// function startQuiz() {
//   startButton.classList.add("hide");
//   shuffledQuestions = questions.sort(() => Math.floor(Math.random));
// }

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNum = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

  let allAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
  allAnswers = shuffle(allAnswers);
  allAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer;
    button.classList.add("btn");
    optionButtons.appendChild(button);
  });

  function shuffle(arr) {
    let newArr = [];
    arr = [...arr];
    for (let i = 0; i < 4; i++) {
      let rand = Math.floor(Math.random() * arr.length);
      const element = arr[rand];
      newArr.push(element);
      arr.splice(rand, 1);
    }
    return newArr;
  }

  function nextButton() {
    const nextBtn = document.getElementById("next-btn");
  }
*/
/*
for (let i = 0; i < questions.length; i++) {
  function domandeCasuali(arr) {
    const arrDomande = document.getElementsByClassName("question-container")[0];
    const domande = questions[i].question;

    console.log(arrDomande);

    for (let q = 0; q < arrDomande.length; q++) {
      let domandaRandom = Math.floor(Math.random() * arr.length);
    }
  }
  const correctAns = questions[i].correct_answer;
  const incorrectAns = questions[i].incorrect_answers;
  for (let j = 0; j < questions.length; j++) {
    const element = questions[j];
  }
*/
// }
// const answers = document.getElementsByClassName("option");
// answers.innerHTML = currentQuestion.incorrect_answers;
//}

//window.onload = function () {
// showQuestion();
// TIPS:
// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno.
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile
//};
