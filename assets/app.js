// Simple script to update the year in the footer
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});
// ======================= SCROLL ANIMATION ENGINE =======================

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".scroll-reveal, .scroll-left, .scroll-right, .scroll-zoom"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach((el) => observer.observe(el));
});
