const $ = s => document.querySelector(s);

const seconds_hand = $('.second-hand');
const minutes_hand = $('.minute-hand');
const hour_hand = $('.hour-hand');
const play_sound = $('.tiktok');
const stop_sound = $('.btn');

function set_seconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const seconds_deg = ( (seconds / 60) * 360 + 180);
    seconds_hand.style.transform = `rotate(${seconds_deg}deg)`;


   
    
    if(!play_sound) return;
    play_sound.currentTime = 0;
    play_sound.play();

}


function set_minutes() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minutes_deg = ( (minutes / 60) * 360 + 180);
    minutes_hand.style.transform = `rotate(${minutes_deg}deg)`;
}


function set_hours() {
    const now = new Date();
    const hours = now.getHours();
    const hours_deg = ( (hours / 12) * 360 + 180);
    hour_hand.style.transform = `rotate(${hours_deg}deg)`;
}


setInterval(set_seconds, 1000);
setInterval(set_minutes, 1000);
setInterval(set_hours, 1000);

