const festivals = {
    '2-14': '💖 Valentine’s Day',
    '12-25': '🎄 Christmas',
    '1-1': '🎉 New Year’s Day'
};

const valentineWeek = {
    '2-7': '🌹 Rose Day',
    '2-8': '💍 Propose Day',
    '2-9': '🍫 Chocolate Day',
    '2-10': '🧸 Teddy Day',
    '2-11': '🤞 Promise Day',
    '2-12': '🤗 Hug Day',
    '2-13': '💋 Kiss Day',
    '2-14': '💖 Valentine’s Day'
};

function updateClock() {
const now = new Date();
const monthDay = `${now.getMonth() + 1}-${now.getDate()}`;

document.getElementById('festive').innerText = festivals[monthDay] || '';
document.getElementById('valentine-week').innerText = valentineWeek[monthDay] || '';

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const amPm = hours >= 12 ? 'PM' : 'AM';

const formattedHours = hours % 12 || 12; // Convert 0 to 12
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

const timeString = `${formattedHours} : ${formattedMinutes} : ${formattedSeconds} ${amPm}`;

document.getElementById('digital-clock').innerText = timeString;
document.getElementById('date').innerText = now.toDateString();

document.getElementById('hour-hand').style.transform = `rotate(${(hours % 12) * 30 + (minutes / 2)}deg)`;
document.getElementById('minute-hand').style.transform = `rotate(${minutes * 6}deg)`;
document.getElementById('second-hand').style.transform = `rotate(${seconds * 6}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
