let questionNumber = 0;
let score = 0;
const questionCounter = document.getElementById("number-of-question");

const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");

function updateQuestionCounter(hasEnded = false) {
  questionCounter.innerHTML = !hasEnded ? "QUESTION " + (questionNumber + 1) + "/" + questions.length : "";
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
    showQuestion();
    updateQuestionCounter();
  } else {
    showScore();
    updateQuestionCounter(true);
  }
}

function showScore() {
  quizContainer.innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

window.onload = function () {
  showQuestion();
  updateQuestionCounter();
};




/////////////////////////////////////////////////////////
//////////////////////////////////////////////
///////////////////////////////////////
///////////////////////////
//RESULTES
const semiCircleQuiz = document.querySelectorAll(".semicircle-quiz");

const risposteCorette = document.querySelector(".risposte-corette");
const risposteSbagliate = document.querySelector(".risposte-sbagliate");

//input


const rightRisposte = 0;
const wrongRisposte = 0;

const giusteRisposte = rightRisposte + score;
const sbagliateRisposte = wrongRisposte + (${questions.length} - {score});
const totRisposte = giusteRisposte + sbagliateRisposte;


function countRightAndWrong() { 

//funzione che si collega al grafico




// funzione per trasformare il risultato in percentuale
const 







// funzione per generare commento centrale

const commentoRisultato = document.getElementsByClassName("commento-risultato")
const feedbackRisultato = () => {

if (giusteRisposte> sbagliateRisposte) {
    const paragrafo1 = document.createElement("p")
    paragrafo1.classList.add("paragrafo1")
    paragrafo1.innerText= "Congratulations!"
    commentoRisultato.appendChild(paragrafo1)

    const paragrafo2 = document.createElement("p")
    paragrafo2.classList.add("paragrafo2")
    paragrafo2.innerText= "You passed the exam."
    commentoRisultato.appendChild(paragrafo2)

    const paragrafo3 = document.createElement("p")
    paragrafo3.classList.add("paragrafo3")
    paragrafo3.innerText= "We'll send you the certificate in a few minutes. Check your email (including promotions/ spam folder) "
    commentoRisultato.appendChild(paragrafo3)

} else {
    const paragrafo4 = document.createElement("p")
    paragrafo4.classList.add("paragrafo4")
    paragrafo4.innerText= "Exam failed!"
    commentoRisultato.appendChild(paragrafo4)

}





}





}