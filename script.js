// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000, // Animation will last for 1 second
  once: true,     // Animation will only happen once per element
  offset: 120,    // Animation starts 120px before the element is in view
});