//RESULTES
const semiCircleQuiz = document.querySelectorAll(".semicircle-quiz");

const risposteCorette = document.querySelector(".risposte-corette");
const risposteSbagliate = document.querySelector(".risposte-sbagliate");

//input


const rightRisposte = 0;
const wrongRisposte = 0;

const giusteRisposte = rightRisposte + score;
const sbagliateRisposte = wrongRisposte + (${question.leght} - {score});
const totRisposte = giusteRisposte + sbagliateRisposte;


function countRightAndWrong() { 

//funzione che si collega al grafico




// funzione per trasformare il risultato in percentuale

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