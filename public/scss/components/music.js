/* the music player reference from
https://github.com/bradtraversy/vanillawebprojects/tree/master/music-player*/

// Select all the elements in the music.html page and assign them to a variable
let cover = document.querySelectorAll(".cover")
let audio = document.querySelectorAll(".audio")
let title = document.getElementById("title")
let actionBtnAll = document.querySelectorAll(".action-btn")
let actionBtn = document.querySelector(".action-btn-big")
let musicIndex = 0
let musicState = false
// Define the list of music that be played
let musicName = [
    'ChaChaCha - Place To Place',
    'The Bohannon Walk - Bohannon',
    'I Want To Break Free - Greatest Hits II',
]
actionBtn.onclick = function(){
    musicState = !musicState
    if(!musicState){
        for(let i = 0; i < audio.length; i++){
            audio[i].pause()
        }
        return
    }
    for(let i = 0; i < audio.length; i++){
        audio[i].pause()
        cover[i].style.display = 'none'
    }
    cover[musicIndex].style.display = 'block'
    audio[musicIndex].play()
    title.innerText = musicName[musicIndex]
}
actionBtnAll[0].onclick = function(){
    for(let i = 0; i < audio.length; i++){
        audio[i].pause()
        cover[i].style.display = 'none'
    }
    if(musicIndex == 0){
        musicIndex = 2
    }else{
        musicIndex = musicIndex - 1
    }
    audio[musicIndex].play()
    cover[musicIndex].style.display = 'block'
    title.innerText = musicName[musicIndex]
}
actionBtnAll[2].onclick = function(){
    for(let i = 0; i < audio.length; i++){
        audio[i].pause()
        cover[i].style.display = 'none'
    }
    if(musicIndex == 2){
        musicIndex = 0
    }else{
        musicIndex = musicIndex + 1
    }
    audio[musicIndex].play()
    cover[musicIndex].style.display = 'block'
    title.innerText = musicName[musicIndex]
}