document.title = "Music Player";

const audio = document.querySelector("#audio");

const songTitle = document.querySelector("h1");
const artistTitle = document.querySelector("p");
const disc = document.querySelector(".disc");
const musicRange = document.getElementById("range");
const currentMusic = document.querySelector("label:first-child");
const musicDuratin = document.querySelector("label:last-child");
const playBtn = document.querySelector("button");
const prevMusic = document.querySelector(".prev");
const nextMusic = document.querySelector(".nxt");
const shuffleMusic = document.querySelector(".shuffle");
const repeatOne = document.querySelector(".count-repeat");
const repeatOff = document.querySelector("hr");
const repeatAll = document.querySelector(".repeat");
const playMusic = document.querySelector(".play-container");
const repeatContainer = document.querySelector(".repeat-container");

let currentTime = "00:00";
currentMusic.innerHTML = currentTime;
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

    setInterval(() => {
        musicRange.value = audio.currentTime;
        currentMusic.innerHTML = stringTime(audio.currentTime);

        if (repeatContainer.className.includes("off") && audio.currentTime == audio.duration) {
            console.log("good")
            disc.classList.remove("play");
            disc.classList.add("pause");
            playBtn.className = "pause";
            playBtn.innerHTML = "| |";
            playMusic.classList.remove("play");
            playMusic.classList.add("pause");
        } else if (audio.currentTime == audio.duration && repeatContainer.className.includes("one")) {
            console.log("good")
            audio.play();
        } else if (audio.currentTime == audio.duration && repeatContainer.className.includes("all")) {
            nextMusics();
            audio.play();
        }

    }, 200);

    currentMusic.innerHTML = currentTime;

    musicRange.value = 0;
    setTimeout(() => {
    }, 1000);
    setTimeout(() => {
        musicDuratin.innerHTML = stringTime(audio.duration);
        musicRange.max = audio.duration;
    }, 300);
}

const stringTime = (time) => {
    let mins = Math.floor(time / 60);
    if (mins < 10) {
        mins = `0${mins}`
    }
    let secs = Math.floor(time % 60);
    if (secs < 10) {
        secs = `0${secs}`
    }
    return `${mins} : ${secs} `
}

musicsPlayElms(0);

const prevMusics = () => {
    countMusic -= 1;
    if (countMusic == -1) {
        countMusic = musicData.length - 1;
    }

    if (shuffleMusic.src == "http://127.0.0.1:5500/images/shuffleOn.png") {
        let mixedMusics = Math.floor(Math.random() * musicData.length);
        countMusic = mixedMusics;
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

    if (shuffleMusic.src == "http://127.0.0.1:5500/images/shuffleOn.png") {
        let mixedMusics = Math.floor(Math.random() * musicData.length);
        countMusic = mixedMusics;
    }

    musicsPlayElms(0);
}

nextMusic.addEventListener("click", nextFunc);

function nextFunc() {
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
};

musicRange.addEventListener("change", () => {
    audio.currentTime = musicRange.value;
})

shuffleMusic.addEventListener("click", () => {
    if (shuffleMusic.src == "http://127.0.0.1:5500/images/shuffleOff.png") {
        shuffleMusic.src = "images/shuffleOn.png";
    } else {
        shuffleMusic.src = "images/shuffleOff.png";
    }
})

repeatContainer.addEventListener("click", () => {
    if (repeatContainer.className.includes("all")) {
        repeatContainer.classList.remove("all");
        repeatContainer.classList.add("one");
        repeatOne.classList.add("one");
    } else if (repeatContainer.className.includes("one")) {
        repeatContainer.classList.remove("one");
        repeatContainer.classList.add("off");
        repeatOne.classList.remove("one");
        repeatOff.classList.add("off");
    } else {
        repeatContainer.classList.remove("off");
        repeatContainer.classList.add("all");
        repeatOff.classList.remove("off");
    }
})