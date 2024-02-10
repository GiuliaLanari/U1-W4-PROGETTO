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

///////INVIO FEEDBACK (DA METTERE ALERT SE NON VI è UN CONTENUTO)///
/*
const inputTesto = document.querySelector("#input-feedback");
console.log(inputTesto);
const funzioneInvioFeedback = bottoneInvioFeedback.addEventListener("click", function (event) {
  if (!inputTesto) {
    event.preventDefault();
    alert("Non hai inserito un feedback");
  }
});
/////////PER PORTARE IL VALORE NELLA PAFINA DOPO L'INCIO///
const bottoneInvioFeedback = document.querySelector(".bottone-azzurro-feedback");

const form = document.getElementById("contenitore-inputFeedback");
const inputText = document.getElementById("input-feedback");

bottoneInvioFeedback.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputTextValue = inputText.value;

  localStorage.setItem("inputValue", inputTextValue);

  window.Location.href = "Invio-feedback-page.html";
});
*/
