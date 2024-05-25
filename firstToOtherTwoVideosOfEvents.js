const divs = document.querySelectorAll("div");
divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("hi")
    })
})