const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Mobile Menu
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};

// Scroll Reveal Animations
const sr = ScrollReveal({
  distance: '50px',
  duration: 1200,
  reset: false
});

// Home Section
sr.reveal('.home-text', { 
  delay: 200, 
  origin: 'left' 
});

sr.reveal('.home-img', { 
  delay: 300, 
  origin: 'right' 
});

// About, Skills, Portfolio, Contact
sr.reveal('.about, .portfolio, .service, .contact', {
  delay: 200,
  origin: 'bottom'
});

// 🔥 Experience Animated Entry
sr.reveal('.experience-card', {
  delay: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 1200,
  interval: 200   // Cards appear one by one
});
