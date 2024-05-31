function contentMenuLoaded() {

    const div = document.querySelector("div");
    const colorElms = document.querySelector("ul");
    const colors = document.getElementsByTagName("li");

    div.addEventListener("contextmenu", showColorElements);

    function showColorElements(ev) {
        ev.preventDefault();

        colorElms.style.top = `${ev.pageY - 10}px`;
        colorElms.style.left = `${ev.offsetX - 10}px`;
    }

    colorElms.addEventListener("mouseleave", leaveColorConteiner);

    function leaveColorConteiner(ev) {
        colorElms.style.top = "-200%";
        colorElms.style.left = "-200px";
    }

    Array.from(colors).forEach(function (color) {
        color.addEventListener("click", changeColor);

        function changeColor(ev) {
            if (color.innerHTML == "Red Item") {
                div.style.background = "red";
            } else if (color.innerHTML == "Gold Item") {
                div.style.background = "gold";
            } else if (color.innerHTML == "Green Item") {
                div.style.background = "green";
            }
        }
    })
}

window.onload = function () {
    contentMenuLoaded()
};