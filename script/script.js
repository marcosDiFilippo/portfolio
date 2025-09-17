const openClosed = document.querySelector("#burger");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".navLink");

openClosed.addEventListener("change", () => {
    nav.classList.toggle("openClosed");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("openClosed");
        openClosed.checked = false;
    });
});

const liPanel = document.querySelector(".liPanel");
const panel = document.querySelector(".panelSettings");

liPanel.addEventListener("click", () => {
    panel.classList.toggle("activo");
});

const button = document.getElementById("theme-checkbox");

const body = document.querySelector("body");
const section = document.querySelectorAll("section");
const cardsColor = document.querySelectorAll(".card");
const p = document.querySelectorAll(".card p");
const titles = document.querySelectorAll("h1, h3, h4"); 
const languages = document.querySelectorAll(".languages");
const header =  document.querySelector("header");
const labelsRadio = document.querySelectorAll(".labels-radio");
const slide = document.querySelector(".slide");

button.addEventListener("click", () => {
    body.classList.toggle("light");
    header.classList.toggle("light");
    cardsColor.forEach(cardsColor => {
        cardsColor.classList.toggle("light");
    })
    p.forEach(p => {
        p.classList.toggle("light");
    })
    slide.classList.toggle("light");
    titles.forEach(titles => {
        titles.classList.toggle("light");
    })
    navLink.forEach(navLink => {
        navLink.classList.toggle("light");
    })
    labelsRadio.forEach(labelsRadio => {
        labelsRadio.classList.toggle("light");
    })
    languages.forEach(languages => {
        languages.classList.toggle("light");
    })
});

const inputsRadio = document.querySelectorAll(".inputs-radio");

const fullstack = document.querySelector("#projects-fullstack");
const backend = document.querySelector("#projects-backend");
const frontend = document.querySelector("#projects-frontend");
const arrayStacks = [fullstack, backend, frontend];

arrayStacks[0].style.display = "flex";

for (let i = 1; i < arrayStacks.length; i++) {
    arrayStacks[i].style.display = "none";
}

inputsRadio.forEach(inputsRadio => {
    inputsRadio.addEventListener("click", () => {

        arrayStacks.forEach(arrayStacks => {
            arrayStacks.style.display = "none";
        })
        
        const value = inputsRadio.value;
        
        if (value == "fullstack") {
            fullstack.style.display = "flex";
            slide.style.transform = "translateX(0)";
        }
        else if (value == "backend") {
            backend.style.display = "flex";
            slide.style.transform = "translateX(100%)";
        }
        else if (value == "frontend") {
            frontend.style.display = "flex";
            slide.style.transform = "translateX(200%)";
        }
    });
})

const texts = ["Developer", "Frontend", "Backend"];
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