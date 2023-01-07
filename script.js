/* Adding a class of active to the next slide item and dot. */
const slider = document.querySelector(".slider");
const slideItems = document.querySelectorAll(".slider__item");
const controlDots = document.querySelectorAll(".control .dot");
let indexItem = 0;

/* A function that is called every 2 seconds. */
setInterval(() => {
  indexItem = indexItem + 1 >= slideItems.length ? 0 : indexItem + 1;
  document.querySelector(".slider__item.active").classList.remove("active");
  document.querySelector(".control .dot.active").classList.remove("active");
  slideItems[indexItem].classList.add("active");
  controlDots[indexItem].classList.add("active");
}, 1500);
