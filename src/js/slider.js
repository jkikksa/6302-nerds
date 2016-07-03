var toggle1 = document.getElementById("sliderToggle1");
var toggle2 = document.getElementById("sliderToggle2");
var toggle3 = document.getElementById("sliderToggle3");

var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");
if (toggle1) {


toggle1.classList.add("slider-controls__toggle--active");
slide2.classList.add("slide--hide");
slide3.classList.add("slide--hide");

toggle1.addEventListener("click", function (event) {
  event.preventDefault();
  slide1.classList.remove("slide--hide");
  slide2.classList.add("slide--hide");
  slide3.classList.add("slide--hide");

  toggle1.classList.add("slider-controls__toggle--active");
  toggle2.classList.remove("slider-controls__toggle--active");
  toggle3.classList.remove("slider-controls__toggle--active");


})

toggle2.addEventListener("click", function (event) {
  event.preventDefault();
  slide2.classList.remove("slide--hide");
  slide1.classList.add("slide--hide");
  slide3.classList.add("slide--hide");

  toggle2.classList.add("slider-controls__toggle--active");
  toggle1.classList.remove("slider-controls__toggle--active");
  toggle3.classList.remove("slider-controls__toggle--active");

})

toggle3.addEventListener("click", function (event) {
  event.preventDefault();
  slide3.classList.remove("slide--hide");
  slide1.classList.add("slide--hide");
  slide2.classList.add("slide--hide");

  toggle3.classList.add("slider-controls__toggle--active");
  toggle1.classList.remove("slider-controls__toggle--active");
  toggle2.classList.remove("slider-controls__toggle--active");

})
}
