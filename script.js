const arrows = document.querySelector(".arrow");
const redSlide = document.querySelector(".slider--orange");
const blueSlide = document.querySelector(".slider--blue");

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (redSlide.classList.contains("slider__hidden")) {
      blueSlide.classList.add("slider__hidden");
      redSlide.classList.remove("slider__hidden");
    } else if (blueSlide.classList.contains("slider__hidden")) {
      redSlide.classList.add("slider__hidden");
      blueSlide.classList.remove("slider__hidden");
    }
  });
});
