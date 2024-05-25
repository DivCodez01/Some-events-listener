document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inputFile").addEventListener("change", filesPicked);

    document.getElementById("btnToggle").addEventListener("click", toggleInput);
    document.getElementById("btnPick").addEventListener("click", askForFiles);
    document.getElementById("btnInfo").addEventListener("click", showFileIngfo);
});

function filesPicked(ev) {
    let input = ev.target;
    let files = input.files;
    console.log(files);
    if (files.length > 0) {
        showFileIngfo(ev);
    }
}

function toggleInput(ev) {
    ev.preventDefault();
    let control = document.getElementById("inputFile");
    control.classList.toggle("hidden");
}

function askForFiles(ev) {
    ev.preventDefault();
    let control = document.getElementById("inputFile");
    control.click();
}

function showFileIngfo(ev) {
    if (ev.type == "click") ev.preventDefault();
    const filez = document.getElementById("inputFile").files;
    let len = filez.length;
    for (let i = 0; i < len; i++) {
        console.group();
        console.log(filez[i].name);
        console.log(filez[i].size);
        console.log(filez[i].type);
        console.log(filez[i].lastModifiedDate);
        console.groupEnd();
    }
}

