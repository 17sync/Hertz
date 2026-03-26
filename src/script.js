const songs=[
  "songs/nectar/Joji - 777.mp3",
  "songs/ballads1/Joji - COME THRU.mp3",
  "songs/nectar/Joji - Ew.mp3",
  "songs/nectar/Joji - Gimme Love.mp3",
  "songs/nectar/Joji - High Hopes.mp3",
  "songs/ballads1/Joji - I'LL SEE YOU IN 40.mp3",
  "songs/nectar/Joji - Like You Do.mp3",
  "songs/nectar/Joji - MODUS.mp3",
  "songs/nectar/Joji - Mr. Hollywood.mp3",
  "songs/nectar/Joji - NITROUS.mp3",
  "songs/nectar/Joji - Normal People (ft. rei brown).mp3",
  "songs/nectar/Joji - Pretty Boy (ft. Lil Yachty).mp3",
  "songs/nectar/Joji - Reanimator (ft. Yves Tumor).mp3",
  "songs/nectar/Joji - Run.mp3",
  "songs/nectar/Joji - Sanctuary.mp3",
  "songs/ballads1/Joji - SLOW DANCING IN THE DARK.mp3",
  "songs/ballads1/Joji - TEST DRIVE.mp3",
  "songs/nectar/Joji - Tick Tock.mp3",
  "songs/ballads1/Joji - WANTED U.mp3",
  "songs/ballads1/Joji - WHY AM I STILL IN LA (ft. Shlohmo & D33J).mp3",
  "songs/ballads1/Joji - YEAH RIGHT.mp3",
  "songs/nectar/Joji - Your Man.mp3",
  "songs/nectar/Joji & Diplo - Daylight.mp3",
  "songs/nectar/Joji & BENEE - Afterthought.mp3",
  "songs/ballads1/Joji ft. Clams Casino - CAN'T GET OVER YOU.mp3",
  "songs/ballads1/Joji ft. Trippie Redd - R.I.P.mp3"
];
const albumCovers={
  "nectar":"../album-covers/nectar.png",
  "ballads1":"../album-covers/ballads1.png"
};

let currentIndex=0;

const audio=document.getElementById("audio");
const playButton=document.getElementById("play");
const nextButton=document.getElementById("next");
const prevButton=document.getElementById("prev");
const title=document.getElementById("title");
const cover=document.getElementById("cover");

function getAlbum(song){
  return song.split("/")[1]; 
}

function getCover(song){
  const album=getAlbum(song);
  
  if(albumCovers[album]) return albumCovers[album];
  return "../album-covers/defaultCover.png";
}

function getTitle(song){
  let name=song.split("/").pop();        
  name=name.replace(".mp3","");            
  
  return name;
}

function loadSong(index){
  const song=songs[index];
  
  cover.src=getCover(song);
  audio.src=song;
  title.innerText=getTitle(song);
}

let isPlaying=false;

playButton.onclick=()=>{
  if(!isPlaying){
    audio.play();
    playButton.innerText="⏸";
  }else{
    audio.pause();
    playButton.innerText="▶";
  }
  isPlaying=!isPlaying;
};

nextButton.onclick=()=>{
  currentIndex=(currentIndex+1)%songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.innerText="⏸";
  isPlaying=true;
};

prevButton.onclick=()=>{
  currentIndex=(currentIndex-1+songs.length)%songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.innerText="⏸";
  isPlaying=true;
};

loadSong(currentIndex);