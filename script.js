const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const linkItems = document.querySelectorAll(".nav-links a");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}

linkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks?.classList.remove("is-open");
    toggleButton?.setAttribute("aria-expanded", "false");
  });
});

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));
