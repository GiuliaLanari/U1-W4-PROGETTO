//FEEDBACK PAGE
const ratingStars = [...document.getElementsByClassName("star")];

function executeRating(stars) {
  let selectedStars = [];

  stars.forEach((star, i) => {
    star.onclick = () => {
      if (star.classList.contains("active")) {
        star.classList.remove("active");
      } else {
        star.classList.add("active");
      }
    };

    // selezionare le stelle
    star.addEventListener("mouseover", () => {
      selectedStars.forEach((selectedIndex) => {
        stars[selectedIndex].classList.add("active");
      });

      for (let j = 0; j <= i; j++) {
        stars[j].classList.add("active");
      }
    });

    //mouseleave per ripristinare il colore originale
    star.addEventListener("mouseleave", () => {
      stars.forEach((star, index) => {
        if (!selectedStars.includes(index)) {
          star.classList.remove("active");
        }
      });
    });
  });
}

executeRating(ratingStars);
