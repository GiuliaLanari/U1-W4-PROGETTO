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

let questionNumber = 0;
let score = 0;

//let timeLeft= document.querySelector(".time-left")
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
//const countOfQuestions = document.querySelector(".number-of-questions");
//let questionCount;
//let count=11
//let countDown
/*
const timerDisplay=()=>{
  countDown=setInterval(()=>{
    count--
    timeLeft.innerHTML=`${count}s`
    if (count==0){
      clearInterval(countDown)
      displayNext()
    }
  },1000);
}*/

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

      const label = document.createElement("label");
      label.innerText = option;

      const optionDiv = document.createElement("div");
      optionDiv.appendChild(radio);
      optionDiv.appendChild(label);

      optionsContainer.appendChild(optionDiv);
    });
  } else if (currentQuestion.type === "boolean") {
    const optionTrue = document.createElement("input");
    optionTrue.type = "radio";
    optionTrue.name = "option";
    optionTrue.value = "True";

    const trueLabel = document.createElement("label");
    trueLabel.innerText = "True";

    const trueDiv = document.createElement("div");
    trueDiv.appendChild(optionTrue);
    trueDiv.appendChild(trueLabel);

    const falseOption = document.createElement("input");
    falseOption.type = "radio";
    falseOption.name = "option";
    falseOption.value = "False";

    const falseLabel = document.createElement("label");
    falseLabel.innerText = "False";

    const falseDiv = document.createElement("div");
    falseDiv.appendChild(falseOption);
    falseDiv.appendChild(falseLabel);

    optionsContainer.appendChild(trueDiv);
    optionsContainer.appendChild(falseDiv);
  }
}

let questionNum = 1;
function onClick() {
  questionNum += 1;
  const questionCount = (document.getElementById("number-of-question").innerHTML =
    "QUESTION " + questionNum + " / " + questions.length);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (!selectedOption) return;

  const answer = selectedOption.value;
  const currentQuestion = questions[questionNumber];

  if (answer === currentQuestion.correct_answer) {
    score++;
  }

  questionNumber++;
  if (questionNumber < questions.length) {
    /*countOfQuestions.innerHTML = "QUESTION" + questionCount + 1 + " /10";
    quizDisplay(questionCount);
    count = 11;
    clearInterval(countdown);
    timerDisplay();*/
    showQuestion();
  } else {
    showScore();
  }
  onClick();
}

nextButton.addEventListener("click", checkAnswer);

window.onload = function () {
  showQuestion();
};

/*
let timeLeft=document.querySelector(".time-left")
let quizContainer=document.getElementById("container")
let nextBtn=document.getElementById("next-btn")
let countOfQuestion=document.querySelector(".number-of-question")
let displayContainer=document.getElementById("display-container")
let scoreContainer=document.querySelector(".score-container")
let userScore=document.getElementById("user_score")
let startScreen=document.querySelector("start-screen")
let startButton=document.getElementById("start-button")
let questionCount
let scoreCount=0
let count=11
let countDown

restart.addEventListener("click", ()=>{
  initial()
  displayContainer.classList.remove("hide")
  scoreContainer.classList.add("hide")
})

nextBtn.addEventListener("click",(displayNext=()=>{
  questionCount+=1
  if(questionCount===questions.length){
    displayContainer.classList.add("hide")
    scoreContainer.classList.remove("hide")
    userScore.innerHTML="Your score is"+ scoreCount+" out of "+questionCount
  }
  else{
    countOfQuestion.innerHTML=questionCount+1+" of "+questions.length+"questions"
    quizDisplay(questionCount)
    count=11
    clearInterval(countDown)
    timerDisplay()
  }
})
);
const timerDisplay=()=>{
  countDown=setInterval(()=>{
    count--
    timeLeft.innerHTML='${count}s'
    if(count===0){
      clearInterval(countDown)
      displayNext()
    }
  },1000)
}

const quizDisplay=(questionCount)=>{
  let quizQuestions=document.querySelectorAll(".container-mid")
  quizQuestions.forEach((question)=>{
  })
  question[questionCount].classList.remove("hide")
}
function quizGenerator(){
  i.options.sort(()=>Math.random()-0.5)
  let div=document.createElement("div")
  div.classList.add("container-mid","hide")

  countOfQuestion.innerHTML= "QUESTION "+ 1 +" / "+ questions.length

  let questionDiv=document.createElement("p")
  questionDiv.classList.add("question")
  questionDiv.innerHTML=i.question
  div.appendChild(questionDiv)

  div.innerHTML+=`
  <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
  <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
  <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
  <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
  `
  quizContainer.appendChild(div)
}

function checker(userOption){
  let userSolution=userOption.innerText
  let question=document.getElementsByClassName("container-mid")[questionCount]
  let options=question.querySelectorAll("option-div")

  if(userSolution===questions[questionCount].correct_answer){
    userOption.classList.add("correct")
    scoreCount++
  }else{
    userOption.classList.add("incorrect")

    options.forEach((element)=>{
      if((element.innerText= questions[questionCount].correct_answer)){
        element.classList.add("correct")
      }
    })
  }

  clearInterval(countDown)
  options.forEach((element)=>{
    element.disabled=true
  })
}


function initial(){
  quizContainer.innerHTML=""
  questionCount=0
  scoreCount=0
  count=11
  clearInterval(countDown)
  timerDisplay()
  quizGenerator()
  quizDisplay(questionCount)
}

startButton.addEventListener("click", ())


/*
const startButton = document.getElementById("start-btn");
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

  // for (let i = 0; i < questions.length; i++) {
  //   // console.log(questions[i].correct_answer);
  //   const input = document.getElementsByClassName("option");
  //   const domande = questions[i].question;
  //   const correctAns = questions[i].correct_answer;
  //   const incorrectAns = questions[i].incorrect_answers;
  //   for (let j = 0; j < questions.length; j++) {
  //     const element = questions[j];
  //   }

  // }
  // const answers = document.getElementsByClassName("option");
  // answers.innerHTML = currentQuestion.incorrect_answers;
}

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

*/
