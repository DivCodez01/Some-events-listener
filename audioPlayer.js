document.title = "Music Player";

const audio = document.querySelector("#audio");

const songTitle = document.querySelector("h1");
const artistTitle = document.querySelector("p");
const disc = document.querySelector(".disc");
const musicRange = document.getElementById("range");
const currentMusic = document.querySelector("label:first-child");
const cmusicDuratin = document.querySelector("label:first-child");
const playBtn = document.querySelector("button");
const prevMusic = document.querySelector(".prev");
const nextMusic = document.querySelector(".nxt");
const shuffleMusic = document.querySelector(".shuffle");
const repeatMusic = document.querySelector(".repeat");
const playMusic = document.querySelector(".play-container");

let currentTime = 0;
let countMusic = 0;

const musicBackelms = () => {

    if (playBtn.className == "pause") {
        playMusic.classList.add("play");
        playMusic.classList.remove("pause");
        playBtn.className = "play";
        disc.classList.remove("pause");
        disc.classList.add("play");
        playBtn.innerHTML = "";
        audio.play();
    } else {
        playMusic.classList.remove("play");
        playMusic.classList.add("pause");
        playBtn.className = "pause";
        disc.classList.remove("play");
        playBtn.className = "pause";
        playBtn.innerHTML = "| |";
        disc.classList.add("pause");
        audio.pause();
    }
}

// playMusics(0)

playMusic.addEventListener("click", () => {
    musicBackelms();
})

const musicsPlayElms = (elms) => {
    elms = countMusic;
    songTitle.innerHTML = musicData[elms].songName;
    artistTitle.innerHTML = musicData[elms].artistName;
    disc.style.backgroundImage = `url("${musicData[elms].image}")`;
    let musicSrc = musicData[elms].src;
    audio.src = musicSrc;
}
musicsPlayElms(0);

const prevMusics = () => {
    countMusic += 1;
    musicsPlayElms(0);
}

prevMusic.addEventListener("click", () => {
    prevMusics();
    console.log(audio);
    audio.play();
    if (playBtn.className == "pause") {
        playMusic.classList.add("play");
        playMusic.classList.remove("pause");
        playBtn.className = "play";
        disc.classList.remove("pause");
        disc.classList.add("play");
        playBtn.innerHTML = "";
        audio.play();
    };
})