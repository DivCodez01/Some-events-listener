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
    addAnimation()
    console.log(img)
    setTimeout(() => {
        img.classList.remove("animation")
        console.log(img)
    }, 1000);
}

const nxtElms = () => {
    nbr++;
    if (nbr > imgData.length - 1) {
        nbr = 0;
        firstImage(nbr);
    } else {
        firstImage(nbr);
    }
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

function addAnimation() {
    img.classList.add("animation");
}