
//Scroll to top
const scrollUp = document.querySelector("#scroll-up");


scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

// Nav hamburger

const burger = document.querySelector("#navigation");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");


burger.addEventListener("click", () => {

    ul.classList.toggle("show");
});

// Close hamburger

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
    link.addEventListener("click", () => {

        ul.classList.remove("show");
    })
);