const navLinks = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach((link) => {
  if (
    link.getAttribute("href") === currentPage ||
    (currentPage === "" && link.getAttribute("href") === "#")
  ) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

document
  .querySelectorAll("section, header, footer")
  .forEach((el) => observer.observe(el));

const style = document.createElement("style");
style.innerHTML = `
.fade-in {
opacity: 1 !important;
transform: translateY(0) !important;
transition: all 0.8s ease-out;
}


section, header, footer {
opacity: 0;
transform: translateY(30px);
}
`;
document.head.appendChild(style);

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
    }
  });
});

console.log("main.js chargé avec succès ✅");
