const liPanel = document.querySelector(".liPanel");
const panel = document.querySelector(".panelSettings");

liPanel.addEventListener("click", () => {
    panel.classList.toggle("activo");
});

const button = document.getElementById("theme-checkbox");

const body = document.querySelector("body");
const section = document.querySelectorAll("section");
const cards = document.querySelectorAll(".card");
const p = document.querySelectorAll("p");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelectorAll("h3");
const h4 = document.querySelectorAll("h4");
const languages = document.querySelectorAll(".languages");
const header =  document.querySelector("header");
const navLink = document.querySelectorAll(".navLink");

button.addEventListener("click", () => {
    body.classList.toggle("light");
    header.classList.toggle("light");
    cards.forEach(cards => {
        cards.classList.toggle("light");
    })
    p.forEach(p => {
        p.classList.toggle("light");
    })
    h1.classList.toggle("light");
    h2.classList.toggle("light");
    h3.forEach(h3 => {
        h3.classList.toggle("light");
    })
    h4.forEach(h4 => {
        h4.classList.toggle("light");
    })
    navLink.forEach(navLink => {
        navLink.classList.toggle("light");
    })
    languages.forEach(languages => {
        languages.classList.toggle("light");
    })
});

const texts = ["Developer", "Frontend", "Backend", "Estudiante"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = texts[count];
    let displayed = currentText.substring(0, index);

    document.getElementById("typed-text").textContent = displayed;

    if (!isDeleting && index < currentText.length) {
    index++;
    setTimeout(type, 120);
    } 
    else if (isDeleting && index > 0) {
    index--;
    setTimeout(type, 80);
    } 
    else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else {
            isDeleting = false;
            count = (count + 1) % texts.length;
            setTimeout(type, 200);
        }
    }
}
type();
