const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navMenu");

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle('active');
});
