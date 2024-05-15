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
const repeatMusic = document.querySelector(".repeat")

let currenttime = "00:00"

const playMusics = (elms) => {
    songTitle.innerHTML = musicData[elms].songName;
    artistTitle.innerHTML = musicData[elms].artistName;
    let musicSrc = musicData[elms].src;
    audio.src = musicSrc;

    if (playBtn.className == "pause") {
        playBtn.className = "play";
    } else {
        playBtn.className = "pause";
    }

}