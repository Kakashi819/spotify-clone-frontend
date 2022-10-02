let masterPlay = document.getElementById("masterPlay");
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let myProgressBar = document.getElementById("myprogressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName =document.getElementById("masterSongName");
console.log("spotify");

let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "bhula-dena ",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Jashane-bahara",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "dil smabal ja ",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  { songName: "Ishq-risk", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  {
    songName: "chamak-challo",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "dil-dhadak",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  { songName: "jiya-re", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "sanam-re", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songName: "Na-ja", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();

// handle play/pause/click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

// Array.from(document.getElementsByClassName('songItemPlay')).forEach(element)=>{
//     element.addEventListener('click',(e)=>{
//         makeAllPlays();
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//     })
// }

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      masterSongName.innerText = songs[songIndex].songName;
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex > 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 9) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
