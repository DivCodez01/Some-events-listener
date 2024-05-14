const img = document.querySelector("img");
const prvButton = document.querySelector("button:first-child");
const nxtButton = document.querySelector("button:last-child");
const header = document.querySelector("h1");
let image = imgData[0].image;
let convert = imgData[0].convert;
let title = imgData[0].title;
let nbr = 0;

// const prevElms = (data, img, conv) => {
// }
// prevElms(image, convert);

const imgs = (img, conv, headDes) => {
    let src = `${img}${conv}`;
    console.log(src)
    header.innerHTML = `${headDes}`;
    img.src = src;
    console.log(img)
}

imgs(image, convert, title);