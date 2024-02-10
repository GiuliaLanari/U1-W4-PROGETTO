//WELCOME PAGE

const bottoneWelcomePage = document.querySelector(".bottone-azzurro");
const checkbox = document.querySelector(".checkbox");

const funzionamentoBottobeWelcome = bottoneWelcomePage.addEventListener("click", function (event) {
  if (!checkbox.checked) {
    event.preventDefault();
    alert("Non hai selezionato il consenso della checkbox!");
  }
});

// CHIAMATE DELLE FUNZIONI
window.onload = function () {
  funzionamentoBottobeWelcome();
};
