// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Add visible class
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
});

// Target all elements with the 'hidden' class
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// MODAL FORM
const modal = document.getElementById('registration-modal');
const openBtn = document.querySelector('.register-btn'); // header button
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
});

// Absorb the form on submit

openBtn.addEventListener('click', () => {
  modal.classList.add('show');
  modal.removeAttribute('inert');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  modal.setAttribute('inert', '');
});


const form = document.querySelector('.form-container');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('absorbed');

  // Optional: show a message after absorption
  setTimeout(() => {
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation';
    confirmation.textContent = "Transmission Received. You’ve entered the gravity well.";
    form.parentElement.appendChild(confirmation);
  }, 2500); // after animation finishes
});