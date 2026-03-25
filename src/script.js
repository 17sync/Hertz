const songs=[
  {title:"Joji - 777", src:"../songs/Joji - 777.mp3"},
  {title:"Joji - COME THRU", src:"../songs/Joji - COME THRU.mp3"},
  {title:"Joji - Ew", src:"../songs/Joji - Ew.mp3"},
  {title:"Joji - Gimme Love", src:"../songs/Joji - Gimme Love.mp3"},
  {title:"Joji - High Hopes", src:"../songs/Joji - High Hopes.mp3"},
  {title:"Joji - I'LL SEE YOU IN 40", src:"../songs/Joji - I'LL SEE YOU IN 40.mp3"},
  {title:"Joji - Like You Do", src:"../songs/Joji - Like You Do.mp3"},
  {title:"Joji - MODUS", src:"../songs/Joji - MODUS.mp3"},
  {title:"Joji - Mr. Hollywood", src:"../songs/Joji - Mr. Hollywood.mp3"},
  {title:"Joji - NO NITROUS", src:"../songs/Joji - NO NITROUS.mp3"},
  {title:"Joji - Normal People (ft. rei brown)", src:"../songs/Joji - Normal People (ft. rei brown).mp3"},
  {title:"Joji - Pretty Boy (ft. Lil Yachty)", src:"../songs/Joji - Pretty Boy (ft. Lil Yachty).mp3"},
  {title:"Joji - Reanimator (ft. Yves Tumor)", src:"../songs/Joji - Reanimator (ft. Yves Tumor).mp3"},
  {title:"Joji - Run", src:"../songs/Joji - Run.mp3"},
  {title:"Joji - Sanctuary", src:"../songs/Joji - Sanctuary.mp3"},
  {title:"Joji - SLOW DANCING IN THE DARK", src:"../songs/Joji - SLOW DANCING IN THE DARK.mp3"},
  {title:"Joji - TEST DRIVE", src:"../songs/Joji - TEST DRIVE.mp3"},
  {title:"Joji - Tick Tock", src:"../songs/Joji - Tick Tock.mp3"},
  {title:"Joji - WANTED U", src:"../songs/Joji - WANTED U.mp3"},
  {title:"Joji - WHY AM I STILL IN LA (ft. Shlohmo & D33J)", src:"../songs/Joji - WHY AM I STILL IN LA (ft. Shlohmo & D33J).mp3"},
  {title:"Joji - YEAH RIGHT", src:"../songs/Joji - YEAH RIGHT.mp3"},
  {title:"Joji - Your Man", src:"../songs/Joji - Your Man.mp3"},
  {title:"Joji & Diplo - Daylight", src:"../songs/Joji & Diplo - Daylight.mp3"},
  {title:"Joji & BENEE - Afterthought", src:"../songs/Joji & BENEE - Afterthought.mp3"},
  {title:"Joji ft. Clams Casino - CAN'T GET OVER YOU", src:"../songs/Joji ft. Clams Casino - CAN'T GET OVER YOU.mp3"},
  {title:"Joji ft. Trippie Redd - R.I.P", src:"../songs/Joji ft. Trippie Redd - R.I.P.mp3"}
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