const songs=[
  {title:"Song 1", src:"songs/song1.mp3"},
  {title:"Song 2", src:"songs/song2.mp3"}
];
let currentIndex=0;

const audio=document.getElementById("audio");
const playButton=document.getElementById("play");
const nextButton=document.getElementById("next");
const prevButton=document.getElementById("prev");
const title=document.getElementById("title");

function loadSong(index){
  const song=songs[index];
  audio.src=song.src;
  title.innerText=song.title;
}

let isPlaying=false;

playButton.addEventListener("click", ()=>{
  if(!isPlaying){
    audio.play();
    playButton.innerText="Pause";
  }
  else{
    audio.pause();
    playButton.innerText="Play";
  }
  isPlaying=!isPlaying;
});

nextButton.addEventListener("click", ()=>{
  currentIndex=(currentIndex+1)%songs.length;
  loadSong(currentIndex);
  audio.play();
});

prevButton.addEventListener("click", ()=>{
  currentIndex=(currentIndex-1+songs.length)%songs.length;
  loadSong(currentIndex);
  audio.play();
});

loadSong(currentIndex);