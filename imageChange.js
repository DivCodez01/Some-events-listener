document.title = "IMAGE CHANGE AND ANIMATION";
const img = document.querySelector("img");
const prvButton = document.querySelector("button:first-child");
const nxtButton = document.querySelector("button:last-child");
const header = document.querySelector("h1");
let nbr = 0;

let imageLocalStorage = JSON.parse(localStorage.getItem("countImage"));

nbr = imageLocalStorage;

const prevElms = () => {
    nbr--;
    if (nbr < 0) {
        nbr = imgData.length - 1;
        firstImage(nbr);
    } else {
        firstImage(nbr);
    }
    addPrevAnimation()
    setTimeout(() => {
        img.classList.remove("prevAnimation")
    }, 350);
}

const nxtElms = () => {
    nbr++;
    if (nbr > imgData.length - 1) {
        nbr = 0;
        firstImage(nbr);
    } else {
        firstImage(nbr);
    }
    addNxtAnimation();
    setTimeout(() => {
        img.classList.remove("nxtAnimation")
    }, 350);
}

const firstImage = (countImage) => {
    let image = imgData[countImage].image;
    let convert = imgData[countImage].convert;
    let title = imgData[countImage].title;
    let source = imgData[countImage].source;
    let alt = imgData[countImage].altenate;
    header.innerHTML = `${title}`;
    let src = `${source}${image}${convert}`;
    img.setAttribute("alt", `${alt}`);
    img.src = src;
    localStorage.setItem("countImage", JSON.stringify(countImage));
}

firstImage(nbr);

prvButton.addEventListener("click", () => {
    prevElms();
})

nxtButton.addEventListener("click", () => {
    nxtElms();
})

function addPrevAnimation() {
    img.classList.add("prevAnimation");
}


function addNxtAnimation() {
    img.classList.add("nxtAnimation");
}

const deltHeader = (txt, incrm, func) => {

}