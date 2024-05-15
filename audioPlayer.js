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
const playMusic = document.querySelector("play-container");

let currenttime = "00:00"

const playMusics = (elms) => {
    songTitle.innerHTML = musicData[elms].songName;
    artistTitle.innerHTML = musicData[elms].artistName;
    let musicSrc = musicData[elms].src;
    audio.src = musicSrc;

    if (playBtn.className == "pause") {
        playBtn.className = "play";
        playMusic.classList.remove("pause");
        playBtn.classList.add("play");
        disc.classList.add("play");
        playMusic.innerHTML = "";
    } else {

        playMusic.classList.remove("play");
        playBtn.className = "pause";
        disc.classList.remove("play");
        playMusic.innerHTML = "| |";
    }

}