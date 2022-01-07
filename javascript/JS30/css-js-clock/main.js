var hourEle = document.querySelector('.hour');
var minuteEle = document.querySelector('.minute');
var secondEle = document.querySelector('.second');
function setTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    console.log(hour, minute, second);
    var hourDeg = 360 * hour / 24;
    var minuteDeg = 360 * minute / 60;
    var secondDeg = 360 * second / 60;
    console.log(hourDeg, minuteDeg, secondDeg);
    hourEle.style.transform = "rotate(" + hourDeg + "deg)";
    minuteEle.style.transform = "rotate(" + minuteDeg + "deg)";
    minuteEle.style.transform = "rotate(" + minuteDeg + "deg)";
    secondEle.style.transform = "rotate(" + secondDeg + "deg)";
}
setTime();
setInterval(setTime, 1000);
