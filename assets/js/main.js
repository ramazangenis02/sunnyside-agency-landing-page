const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})

navLink.forEach(e => {
    e.addEventListener("click" , () => {
        navMenu.classList.remove("active")
    })
})