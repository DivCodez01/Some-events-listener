document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inputFile").addEventListener("change", filesPicked);

    document.getElementById("btnToggle").addEventListener("click", toggleInput);
    // document.getElementById("btnPick").addEventListener("click", askForFiles);
    document.getElementById("btnInfo").addEventListener("click", showFileIngfo);
});

function filesPicked(ev) {
    let input = ev.target;
    let files = input.files;
    console.log(files);
    if (files.length > 0) {
        showFileIngfo();
    }
}

function toggleInput(ev) {
    let control = document.getElementById("inputFile");
    control.classList.toggle("hidden");
}

function showFileIngfo() {
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

