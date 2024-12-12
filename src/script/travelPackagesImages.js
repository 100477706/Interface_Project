/**********************************/
/*Java Script para la Gestión del carrete de imagenes 1*/
/**********************************/

let slideIndex1 = 0;
const slides1 = document.querySelectorAll(".container img")

function plusSlides(n) {
  slides1[slideIndex1].previousElementSibling.style.display = "none"
  showSlides1(slideIndex1 += n);
}

function showSlides1(index) {
 if (index >= slides1.length) {slideIndex1 = 0}
  else if (index < 0) {slideIndex1 = slides1.length -1}
  slides1.forEach(slide => {
    slide.classList.remove("displaySlide")
  })
  slides1[slideIndex1].classList.add("displaySlide");
  slides1[slideIndex1].previousElementSibling.style.display = "block"
}

document.addEventListener("DOMContentLoaded", initializeSlider())

function initializeSlider(){
  slides1[slideIndex1].classList.add("displaySlide");
  slides1[slideIndex1].previousElementSibling.style.display = "block"
}