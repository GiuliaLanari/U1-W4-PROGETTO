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

let score = 3;

////////////////////////////////////////////////////////////////////
///////////RESULTS PAGE//////////
////////////////////

function showScore() {
  const correctPercentage = (score / questions.length) * 100;
  const correctScoreElement = document.createElement("p");
  correctScoreElement.classList.add("score-percentage");
  correctScoreElement.innerText = `${correctPercentage.toFixed(1)}%`;

  const correctPercentageElement = document.createElement("p");
  correctPercentageElement.classList.add("score-total");
  correctPercentageElement.innerText = `${score}/${questions.length}questions`;
  const correctParent = document.querySelector(".risposte-corette");
  correctParent.appendChild(correctScoreElement);
  correctParent.appendChild(correctPercentageElement);

  const incorrectPercentage = 100 - correctPercentage;
  const wrongScoreElement = document.createElement("p");
  wrongScoreElement.classList.add("score-percentage");
  wrongScoreElement.innerText = `${incorrectPercentage.toFixed(1)}%`;
  const wrongPercentageElement = document.createElement("p");
  wrongPercentageElement.classList.add("score-total");
  wrongPercentageElement.innerText = `${questions.length - score}/${questions.length}questions`;
  const wrongParent = document.querySelector(".risposte-sbagliate");
  wrongParent.appendChild(wrongScoreElement);
  wrongParent.appendChild(wrongPercentageElement);

  ////////////////////////////////////////////
  const commentoRisultato = document.getElementsByClassName("commento-risultato")[0];
  const contenitoreParagrafo = document.createElement("div");
  contenitoreParagrafo.classList.add("contenitore-p");

  if (correctPercentage >= incorrectPercentage) {
    const paragrafo1 = document.createElement("p");
    paragrafo1.classList.add("paragrafo1");
    paragrafo1.innerText = "Congratulations!";
    contenitoreParagrafo.appendChild(paragrafo1);

    const paragrafo2 = document.createElement("p");
    paragrafo2.classList.add("paragrafo2");
    paragrafo2.innerText = "You passed the exam.";
    contenitoreParagrafo.appendChild(paragrafo2);

    const paragrafo3 = document.createElement("p");
    paragrafo3.classList.add("paragrafo3");
    paragrafo3.innerText =
      "We'll send you the certificate in a few minutes. Check your email (including promotions/ spam folder) ";
    contenitoreParagrafo.appendChild(paragrafo3);

    commentoRisultato.appendChild(contenitoreParagrafo);
  } else {
    const paragrafo4 = document.createElement("p");
    paragrafo4.classList.add("paragrafo4");
    paragrafo4.innerText = "Exam failed!";
    contenitoreParagrafo.appendChild(paragrafo4);
    commentoRisultato.appendChild(contenitoreParagrafo);
  }
  const linearGradientScore = document.getElementById("pie");
  linearGradientScore.style.background = `conic-gradient(#d20094 0% ${incorrectPercentage}%, #00ffff 0% ${correctPercentage}%)`;
}

showScore();
