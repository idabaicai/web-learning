// 显示时间
import { getDateTime } from './utils.js'

function showTime() {
  const time = getDateTime()
  document.getElementById('time').innerHTML = `当前时间: ${time} `
}

setInterval(showTime, 1000)