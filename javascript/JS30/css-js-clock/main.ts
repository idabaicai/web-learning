


const hourEle:HTMLDivElement = document.querySelector('.hour')
const minuteEle:HTMLDivElement = document.querySelector('.minute')
const secondEle:HTMLDivElement = document.querySelector('.second')
function setTime() {
  const now = new Date()  
  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()
  console.log(hour, minute, second);
  const hourDeg = 360 * hour / 24
  const minuteDeg = 360 * minute / 60
  const secondDeg = 360 * second / 60
  console.log(hourDeg, minuteDeg, secondDeg); 
  hourEle.style.transform = `rotate(${hourDeg}deg)`
  minuteEle.style.transform = `rotate(${minuteDeg}deg)`
  minuteEle.style.transform = `rotate(${minuteDeg}deg)`
  secondEle.style.transform = `rotate(${secondDeg}deg)`

}
setTime()
setInterval(setTime, 1000)