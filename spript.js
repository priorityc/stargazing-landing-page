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