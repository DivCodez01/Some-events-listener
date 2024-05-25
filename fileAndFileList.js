document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("inputFile").addEventListener("change", filesPicked);

    document.getElementById("btnToggle").addEventListener("click", toggleInput);
    document.getElementById("btnPick").addEventListener("click", askForFiles);
    document.getElementById("btnInfo").addEventListener("click", showFileIngfo);
});