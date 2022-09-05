const videoPlayer = document.querySelector('.fullscreen-video-wrap')
const video = videoPlayer.querySelector('.video')
const mute = videoPlayer.querySelector('.mute')


// Autoplay na 1600 milieseconden

setTimeout(startVideo, 1600)


// Mute button 

function muted (){
    video.muted = !video.muted;
}