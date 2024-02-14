//FEEDBACK PAGE
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");

  let ratedStars = 0;

  stars.forEach((star, index) => {
    star.addEventListener("mouseover", function () {
      // passaggio del mouse su ogni stella
      for (let i = 0; i <= index; i++) {
        // Illumina la stella corrente e quelle precedenti
        stars[i].classList.add("active");
      }
    });

    star.addEventListener("mouseout", function () {
      // Rimuove l'illuminazione quando il mouse esce dalla stella
      if (ratedStars === 0) {
        for (let i = 0; i < stars.length; i++) {
          stars[i].classList.remove("active");
        }
      } else {
        for (let i = 0; i < ratedStars; i++) {
          stars[i].classList.add("active");
        }
      }
    });

    star.addEventListener("click", function () {
      //event listener per il click su ogni stella
      if (index === ratedStars - 1) {
        // Controlla se la stella cliccata è già stata valutata
        ratedStars = 0; // Se la stella cliccata è già valutata, annulla la valutazione
        // Rimuovi l'illuminazione da tutte le stelle
        stars.forEach((star) => {
          star.classList.remove("active");
        });
      } else {
        ratedStars = index + 1;
        stars.forEach((star, i) => {
          if (i <= index) {
            star.classList.add("active"); // Imposta il nuovo rating
          } else {
            star.classList.remove("active");
          }
        });
      }

      console.log("Rated Stars:", ratedStars); // Salva il rating
    });
  });
});

////////////////////////////////////////////////////////////////////
//////////////////////////////////////////
//PARTE INVIO FEEDBACK//////

function showFeedbak() {
  document.body.innerHTML = "";
  document.body.innerHTML = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/css/Invio-feedback.css" />
    <title>Invio feedback</title>
  </head>
  <body>
    <main>
      <div class="logo">
        <img src="./assets/imgs/epicode_logo.png" alt="logo Epicode" />
      </div>
      <h1>Grazie per il feedback!</h1>
      <div id="commento"></div>
    </main>
    <script src="./assets/JavaScript/Feedback-Page.js"></script>
  </body>
</html>
`;
  ///////CODICE JS PER LA VISUALIZZAZIONE DEL FEEDBACK/////
  ////// DA INSERIRE ///
}
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////
//////codice per salvare il commento del cliente////

/*
const bottoneInvioFeedback = document.querySelector(".bottone-azzurro-feedback");

const commento = [];
console.log(commento);

const inputTesto = document.getElementById("input-feedback");
commento.push;

const funzioneInvioFeedback = function (e) {
  if (inputTesto.value === "") {
    const commentoStringa = "Questo è il tuo commento: " + inputTesto.value;
    console.log(commentoStringa);
    commento.push(commentoStringa);

    inputTesto.value = "";
  }
};

window.onload = function () {
  funzioneInvioFeedback();
};
*/
