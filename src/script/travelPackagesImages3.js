/**********************************/
/*Java Script para la Gestión del carrete de imagenes 3*/
/**********************************/
let slideIndex3 = 0;
const slides = document.querySelectorAll(".container3 img")
console.log(slides[0].classList)

function plusSlides3(n) {
  slides[slideIndex3].previousElementSibling.style.display = "none"
  showSlides3(slideIndex3 += n);
}

function showSlides3(index) {
  if (index >= slides.length) {slideIndex3 = 0}
  else if (index < 0) {slideIndex3 = slides.length -1}
  slides.forEach(slide => {
    slide.classList.remove("displaySlide")
  })
  slides[slideIndex3].classList.add("displaySlide");
  slides[slideIndex3].previousElementSibling.style.display = "block"
}
document.addEventListener("DOMContentLoaded", initializeSlider3())

function initializeSlider3(){
  slides[slideIndex3].classList.add("displaySlide");
  slides[slideIndex3].previousElementSibling.style.display = "block"
}