document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inputFile").addEventListener("change", filesPicked);

    // document.getElementById("btnToggle").addEventListener("click", toggleInput);
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

function showFileIngfo() {
    if (ev.type == "click") ev.preventDefault();
    const filez = document.getElementById("inputFile").files;
    for (let i = 0; i < filez.length; i++) {
        console.group();
        console.log(filez[i].name);
        console.log(filez[i].size);
        console.log(filez[i].type);
        console.log(filez[i].lastModifiedDate);
        console.groupEnd();
    }
}

