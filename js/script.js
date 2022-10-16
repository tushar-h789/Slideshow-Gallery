//slide show gallery start
let slideIndex = 1;

//show dafault as first image
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".mySlides");
  let slidesArr = Array.from(slides);

  let dots = document.querySelectorAll(".demo");
  let dotsArr = Array.from(dots);

  let numberText = document.querySelectorAll(".numbertext");
  let numbertextArr = Array.from(numberText);

  let captionText = document.querySelector("#caption");

  //ekhane if ta kivabe kaj korteche?
  if (n > slidesArr.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slidesArr.length;
  }

  slidesArr.map((item) => {
    item.style.display = "none";
  });
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("slide-anim");

  dotsArr.map((item) => {
    item.className = item.className.replace(" active", "");
  });
  dots[slideIndex - 1].className += " active";

  //nicer ae bisoy ta bujhini
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
