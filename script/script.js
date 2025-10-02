class BurguerMenu {
    #openClosed;
    #nav;
    #navLink;

    constructor (openClosed, nav, navLink) {
        this.#openClosed = openClosed;
        this.#nav = nav;
        this.#navLink = navLink;
    }

    openClosedBurguerMenu() {
        openClosed.addEventListener("change", () => {
            nav.classList.toggle("openClosed");
        });
    }
    
    verificateMenuOpen() {
        navLink.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("openClosed");
                openClosed.checked = false;
            });
        });
    }
}
class PanelSettings {
    #liPanel;
    #panel;

    constructor (liPanel, panel) {
        this.#liPanel = liPanel;
        this.#panel = panel;
    }

    activeteLightMode(button, body, cardsColor, p, titles, languages, header, labelsRadio, slide, pSections, footer, pFooter){
        this.#liPanel.addEventListener("click", () => {
            this.#panel.classList.toggle("activo");
        });

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
            pSections.forEach(pSection => {
                pSection.classList.toggle("light");
            })
            footer.classList.toggle("light");
            pFooter.classList.toggle("light");
        });
    }
}
class ProjectSection {
    #inputsRadio;

    constructor (inputsRadio) {
        this.#inputsRadio = inputsRadio;
    }

    slide (arrayStacks, slidea) {
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
                    arrayStacks[0].style.display = "flex";
                    slide.style.transform = "translateX(0)";
                }
                else if (value == "backend") {
                    arrayStacks[1].style.display = "flex";
                    slide.style.transform = "translateX(100%)";
                }
                else if (value == "frontend") {
                    arrayStacks[2].style.display = "flex";
                    slide.style.transform = "translateX(200%)";
                }
            });
        })
    }
}
//Menu Hamburguesa
const openClosed = document.querySelector("#burger");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".navLink");

const burguerMenu = new BurguerMenu(openClosed, nav, navLink);

burguerMenu.openClosedBurguerMenu();
burguerMenu.verificateMenuOpen();

//Panel Settings
const liPanel = document.querySelector(".liPanel");
const panel = document.querySelector(".panelSettings");

const button = document.getElementById("theme-checkbox");
const body = document.querySelector("body");
const cardsColor = document.querySelectorAll(".card");
const p = document.querySelectorAll(".card p");
const pSections = document.querySelectorAll(".p-sections");
const titles = document.querySelectorAll("h1, h3, h4"); 
const languages = document.querySelectorAll(".languages");
const header =  document.querySelector("header");
const labelsRadio = document.querySelectorAll(".labels-radio");
const slide = document.querySelector(".slide");
const footer = document.querySelector("footer");
const pFooter = document.querySelector("footer p");

const panelSettings = new PanelSettings(liPanel, panel);

panelSettings.activeteLightMode(button, body, cardsColor, p, titles, languages, header, labelsRadio, slide, pSections, footer, pFooter);

//Seccion de proyectos
const inputsRadio = document.querySelectorAll(".inputs-radio");

const fullstack = document.querySelector("#projects-fullstack");
const backend = document.querySelector("#projects-backend");
const frontend = document.querySelector("#projects-frontend");

const arrayStacks = [fullstack, backend, frontend];

const projectSection = new ProjectSection(inputsRadio);
projectSection.slide(arrayStacks, slide);

//Animacion de escritura
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

//llama la funcion
type();