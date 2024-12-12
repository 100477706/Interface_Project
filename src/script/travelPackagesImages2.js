/**********************************/
/*Java Script para la Gestión del carrete de imagenes 1*/
/**********************************/
let slideIndex2 = 0;
const slides2 = document.querySelectorAll(".container2 img")

function plusSlides2(n) {
  slides2[slideIndex2].previousElementSibling.style.display = "none"
  showSlides2(slideIndex2 += n);
}

function showSlides2(index) {
 if (index >= slides2.length) {slideIndex2 = 0}
  else if (index < 0) {slideIndex2 = slides2.length -1}
  slides2.forEach(slide => {
    slide.classList.remove("displaySlide")
  })
  slides2[slideIndex2].classList.add("displaySlide");
  slides2[slideIndex2].previousElementSibling.style.display = "block"
}

document.addEventListener("DOMContentLoaded", initializeSlider2())

function initializeSlider2(){
  slides2[slideIndex2].classList.add("displaySlide");
  slides2[slideIndex2].previousElementSibling.style.display = "block"
}