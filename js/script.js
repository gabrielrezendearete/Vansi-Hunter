/* Menu */

function toggleMenu() {
  document.getElementById('menu').classList.toggle('open');
}

/* Carrossel da Seção Variedades */

const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));

function changeSlide(direction) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}


/* Acordeão da Seção Diferenciais */

var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
