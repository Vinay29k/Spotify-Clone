console.log("welcome to Spotify");

//Initialize the variables
let songIndex =0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songname:"Panga-Yo Yo Honey Singh",filePath:"song/1.mp3",fileCover:"cover/1.png"},
    {songname:"Desi Kalakar-Yo Yo Honey Singh",filePath:"song/2.mp3",fileCover:"cover/2.png"},
    {songname:"Blue Eyes-Yo Yo Honey Singh",filePath:"song/3.mp3",fileCover:"cover/3.png"},
    {songname:"Chaska-Yo Yo Honey Singh",filePath:"song/4.mp3",fileCover:"cover/4.png"},
    {songname:"Dope Shope-Yo Yo Honey Singh",filePath:"song/5.mp3",fileCover:"cover/5.png"},
];

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].fileCover;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    
});

//Handle play/pause button
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
   progress = parseInt(audioElement.currentTime/audioElement.duration*100);
   myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
    
    
 })

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach(element => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    });
}

Array.from(document.getElementsByClassName('songplay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`song/${index+1}.mp3`;
        masterSongName.innerText = songs[index].songname;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');




    });

});

document.getElementById('next').addEventListener('click', ()=>{
    if(index>=4){
        index = 0
    }
    else{
        index += 1;
    }
    audioElement.src = `song/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(index<=0){
        index = 0
    }
    else{
        index -= 1;
    }
    audioElement.src = `song/${index+1}.mp3`;
    masterSongName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
