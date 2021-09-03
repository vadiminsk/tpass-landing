'use strict';

const allSections = document.querySelectorAll('.hidden');
const imgContent = document.querySelectorAll('.section img');
let slideIndex = 1;

const objOptions = {
  root: null,
  threshold: 0.3,
};

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);

allSections.forEach((section) => {
  if (section) {
    sectionObserver.observe(section);
  }
});

function callBackFunction(entries, observer) {
  entries.forEach((entry) => {
    const curSectionsName = entry.target.getAttribute('class');
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
    } else {
      entry.target.classList.add('hidden');
    }
  });
}

showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll('.slide');
  let navigation = document.getElementById('navigation');
  let dots = document.getElementsByClassName('dot');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';

    let li = document.createElement('li');
    li.classList = 'dot';
    navigation.appendChild(li);
    li.innerHTML = i;

    dots[i].className = dots[i].className.replace(' active', '');
    li.addEventListener('click', currentSlide.bind(null, i), false);
  }

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function openMenu() {
  let header = document.getElementById('header');
  let headerBurger = document.getElementById('header-burger');

  headerBurger.addEventListener('click', function () {
    header.classList.toggle('open');
  });
}

openMenu();
