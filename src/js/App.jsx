
//Scroll to top
const scrollUp = document.querySelector("#scroll-up");

// @ts-ignore
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})

// Nav hamburger

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// @ts-ignore
burger.addEventListener("click", () => {
    // @ts-ignore
    ul.classList.toggle("show");
});

// Close hamburger

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => 
    link.addEventListener("click", () => {
        // @ts-ignore
        ul.classList.remove("show");
    })
);