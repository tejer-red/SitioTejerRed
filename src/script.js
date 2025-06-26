// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".content, .tools");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  
    sections.forEach((section) => {
      section.classList.add("hidden");
      observer.observe(section);
    });
  });
  