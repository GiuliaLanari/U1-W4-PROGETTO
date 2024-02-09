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
