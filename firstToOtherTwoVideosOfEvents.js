const divs = document.querySelectorAll("div");
divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("hi")
    })
})

const newDiv = document.createElement("div");
newDiv.style.width = "200px";
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "purple"
newDiv.addEventListener("click", () => {
    console.log("hi")
})
document.body.appendChild(newDiv);

/* document.addEventListener("click", (e) => {
    // this is the same as
    if (e.target.matches("div")) {
        console.log("hfgrvrr")
        console.log(e.target)
    }
}) */

addGlobalEventListener("click", "div", e => {
    console.log("hi")
})



function addGlobalEventListener(type, selector, callback) {     // this +
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })
}