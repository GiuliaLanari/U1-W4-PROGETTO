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

// TIMER

const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");

let sec = 10;
let counter = sec;

let timerLoop;

function countDownTimer() {
  counter--;
  const angle = (counter / sec) * 360;
  console.log(angle);
  // progress indicator
  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }

  timer.innerHTML = `
  <div>${counter}</div>
`;

  //end
  if (counter === 0) {
    clearInterval(timerLoop);
    counter = sec;
    console.log(counter);
    timer.innerHTML = `
    <div>0</div>
  `;
    nextQuestion();
  }
}
////////
///////////////
///////SVILUPPO QUIZ///////
//////////////
///////
let questionNumber = 0;
let score = 0;
const questionCounter = document.getElementById("number-of-question");

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");

function updateQuestionCounter(hasEnded = false) {
  questionCounter.innerHTML = !hasEnded
    ? "QUESTION " +
      (questionNumber + 1) +
      "<span style='color: #900080;'>/</span>" +
      "<span style='color: #900080;'>" +
      questions.length +
      "</span>"
    : "";
}

function showQuestion() {
  const currentQuestion = questions[questionNumber];
  questionElement.innerText = currentQuestion.question;
  optionsContainer.innerHTML = "";

  if (currentQuestion.type === "multiple") {
    const options = currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer);
    options.sort(() => Math.random() - 0.5);

    options.forEach((option) => {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "option";
      radio.value = option;
      radio.classList.add("option-input");

      const label = document.createElement("label");
      label.innerText = option;
      label.classList.add("styled-label");

      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options-container");

      optionsDiv.appendChild(radio);
      optionsDiv.appendChild(label);

      optionsContainer.appendChild(optionsDiv);

      label.addEventListener("click", function () {
        radio.checked = true;
      });
      label.addEventListener("click", checkAnswer);
    });
  } else if (currentQuestion.type === "boolean") {
    const optionTrue = document.createElement("input");
    optionTrue.type = "radio";
    optionTrue.name = "option";
    optionTrue.value = "True";
    optionTrue.classList.add("option-input");

    const trueLabel = document.createElement("label");
    trueLabel.innerText = "True";
    trueLabel.classList.add("styled-label");

    const trueDiv = document.createElement("div");
    trueDiv.classList.add("options-container");
    trueDiv.appendChild(optionTrue);
    trueDiv.appendChild(trueLabel);

    const falseOption = document.createElement("input");
    falseOption.type = "radio";
    falseOption.name = "option";
    falseOption.value = "False";
    falseOption.classList.add("option-input");

    const falseLabel = document.createElement("label");
    falseLabel.innerText = "False";
    falseLabel.classList.add("styled-label");

    const falseDiv = document.createElement("div");
    falseDiv.classList.add("options-container");

    falseDiv.appendChild(falseOption);
    falseDiv.appendChild(falseLabel);

    optionsContainer.appendChild(trueDiv);
    optionsContainer.appendChild(falseDiv);

    trueDiv.addEventListener("click", function () {
      optionTrue.checked = true;
    });
    trueDiv.addEventListener("click", checkAnswer);

    falseDiv.addEventListener("click", function () {
      falseOption.checked = true;
    });
    falseDiv.addEventListener("click", checkAnswer);
  }
}

function nextQuestion() {
  questionNumber++;

  if (questionNumber < questions.length) {
    showQuestion();
    updateQuestionCounter();

    clearInterval(timerLoop);
    resetTimerValues();
    counter = sec;
    timerLoop = setInterval(countDownTimer, 1000);
  } else {
    showScore();
    updateQuestionCounter(true);
    clearInterval(timerLoop);
    counter = sec;
  }
}

function resetTimerValues() {
  const angle = sec * 360;
  console.log(angle);
  // progress indicator
  if (angle > 180) {
    semicircles[2].style.display = "none";
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  } else {
    semicircles[2].style.display = "block";
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform = `rotate(${angle}deg)`;
  }

  timer.innerHTML = `
  <div>${sec}</div>
`;
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) return;

  const answer = selectedOption.value;
  const currentQuestion = questions[questionNumber];

  if (answer === currentQuestion.correct_answer) {
    score++;
  }
  nextQuestion();
}

window.onload = function () {
  showQuestion();
  updateQuestionCounter();
  timerLoop = setInterval(countDownTimer, 1000);
};
