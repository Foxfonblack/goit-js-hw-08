
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById("vimeo-player")

const player = new Player(iframe, {
    id: 19231868,
    width: 640
});

const savedData = localStorage.getItem("videoplayer-current-time")
const parsedData = JSON.parse(savedData)

player.on('timeupdate',throttle(function({seconds}) {
localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds))
}, 1000) );


if(parsedData){
player.setCurrentTime(parsedData)}