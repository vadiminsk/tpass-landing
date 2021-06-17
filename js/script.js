'use strict';

const allSections = document.querySelectorAll('.hidden');
const imgContent = document.querySelectorAll('.section img');

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
