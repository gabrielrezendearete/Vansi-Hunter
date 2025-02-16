/* Slide In */

document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.slide-in-left, .slide-in-right, .slide-in-up');

  function checkVisibility() {
      const windowHeight = window.innerHeight;

      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;

          if (elementTop <= windowHeight * 0.8 && elementBottom >= 0) {
              element.classList.add('visible');
          } else {
              element.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);

  checkVisibility();
});

/* Botões */

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();

          const destino = document.querySelector(this.getAttribute("href"));
          if (destino) {
              destino.scrollIntoView({ behavior: "smooth" });
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".botao-contato");

  botoes.forEach(botao => {
      botao.addEventListener("click", function () {
          const destino = document.querySelector("#contato");
          if (destino) {
              destino.scrollIntoView({ behavior: "smooth" }); 
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".botao-instagram");

  botoes.forEach(botao => {
      botao.addEventListener("click", function () {
          window.location.href = "https://www.instagram.com/vansi_hunter/";
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".botao-whatsapp");

  botoes.forEach(botao => {
      botao.addEventListener("click", function () {
          window.location.href = "https://api.whatsapp.com/send/?phone=5535991489620&text=Ol%C3%A1+gostaria+de+mais+informa%C3%A7%C3%B5es&type=phone_number&app_absent=0";
      });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".botao-saiba-mais");

  botoes.forEach(botao => {
      botao.addEventListener("click", function () {
          const destino = document.querySelector("#sobre");
          if (destino) {
              destino.scrollIntoView({ behavior: "smooth" }); 
          }
      });
  });
});

/* Menu */

function toggleMenu() {
  document.getElementById('menu').classList.toggle('open');
}

/* Flip Card */

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".flip-card");

  cards.forEach(card => {
      card.addEventListener("click", function () {
          if (window.innerWidth <= 768) {
              this.classList.toggle("active");
          }
      });
  });
});


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