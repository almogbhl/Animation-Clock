const $ = s => document.querySelector(s);

const seconds_hand = $('.second-hand');
// const minute_hand = $('.minute-hand');
// const hour_hand = $('.hour-hand');

const now = new Date();
const seconds = now.getSeconds();
// const minutes = now.getMinutes();
// const hours = now.getHours();

const seconds_deg = ( (seconds / 60) * 360 ) + 90;
// const minuts_deg = ( (minutes / 60) * 360 ) + 90;
// const hours_deg = ( (hours / 60) * 360 ) + 90;


// function change_rotate(element, time) {
    
// }

function set_date() {
    seconds_hand.style.transform = `rotate(${seconds_deg}deg)`;

    // change_rotate(seconds_hand,seconds_deg);
    // console.log( `${now+' _deg'}` )
    // console.log(`${seconds} ${seconds_deg} + ${second_hand.style.transform}`);
}

setInterval(set_date, 1000);

