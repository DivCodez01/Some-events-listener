document.title = "Music Player";

const audio = document.querySelector("#audio");

const songTitle = document.querySelector("h1");
const artistTitle = document.querySelector("p");
const disc = document.querySelector(".disc");
const musicRange = document.getElementById("range");
const currentMusic = document.querySelector("label:first-child");
const musicDuratin = document.querySelector("label:first-child");
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
    let = musicDatas = musicData[elms];
    songTitle.innerHTML = musicDatas.songName;
    artistTitle.innerHTML = musicDatas.artistName;
    disc.style.backgroundImage = `url("${musicDatas.image}")`;
    let musicSrc = musicDatas.src;
    audio.src = musicSrc;

    musicRange.value = currentTime;
    setTimeout(() => {
    }, 1000);
    setTimeout(() => {
        musicDuratin.innerHTML = stringTime(audio.duration);
    }, 1000);
}

const stringTime = (time) => {
    let mins = Math.floor(time / 60);
}

musicsPlayElms(0);

const prevMusics = () => {
    countMusic -= 1;
    if (countMusic == -1) {
        countMusic = musicData.length - 1;
    }
    musicsPlayElms(0);
}

prevMusic.addEventListener("click", () => {
    prevMusics();
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
});

const nextMusics = () => {
    countMusic += 1;
    if (countMusic == musicData.length) {
        countMusic = 0;
    }
    musicsPlayElms(0);
}

nextMusic.addEventListener("click", () => {
    nextMusics();
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
});