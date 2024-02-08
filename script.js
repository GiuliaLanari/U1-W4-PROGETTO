const ratingStars = [...document.getElementsByClassName("star")];

function executeRating(stars) {
  stars.forEach((star, i) => {
    star.onclick = () => {
      if (star.classList.contains("active")) {
        star.classList.remove("active");
      } else {
        star.classList.add("active");
      }
    };
    // const activeStar = star.classList.contains("active");
    // console.log(activeStar);
    // for (let i = 0; i < activeStar; i++) {
    //   star.classList.add("active");
    // }
  });
}
executeRating(ratingStars);
