import { useState } from "react";

const App = ({ data }) => {
    const [count, setCount] = useState(0);

    return (
        <main>
            <div>
                <div>{count}</div>
                <button onClick={() => setCount(count + 1)}>Count</button>
            </div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </main>
    );
};
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

const burger = document.querySelector("#burger-menu");
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

export default App