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

let currenttime = "00:00"

const musicBackelms = () => {

    if (playBtn.className == "pause") {
        playMusic.classList.add("play");
        playMusic.classList.remove("pause");
        playBtn.className = "play";
        disc.classList.remove("pause");
        disc.classList.add("play");
        playBtn.innerHTML = "";
    } else {
        playMusic.classList.remove("play");
        playMusic.classList.add("pause");
        playBtn.className = "pause";
        disc.classList.remove("play");
        playBtn.className = "pause";
        playBtn.innerHTML = "| |";
        disc.classList.add("pause");
    }

}

// playMusics(0)

playMusic.addEventListener("click", () => {
    musicBackelms()
    musicsPlayElms(0)
})

const musicsPlayElms = (elms) => {
    songTitle.innerHTML = musicData[elms].songName;
    artistTitle.innerHTML = musicData[elms].artistName;
    let musicSrc = musicData[elms].src;
    audio.src = musicSrc;

    if (playBtn.className == "play") {
        audio.play();
    } else {
        audio.pause();
    }
}
musicsPlayElms(0)

