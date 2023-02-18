


function copilot () {
  console.log();
}

// 写一个遍历二叉树的函数

function add (a, b) {
  return a + b
}

// 写一个排序算法

function sort (arr) {
  return arr.sort((a, b) => a - b)
}

// 写一个数组去重函数
function unique (arr) {
  return Array.from(new Set(arr))
}

// 写一个数组扁平化函数
function flatten (arr) {
  return arr.reduce((prev, next) => prev.concat(Array.isArray(next) ? flatten(next) : next), [])
}

// 写一个数组乱序函数
function shuffle (arr) {
  return arr.sort(() => Math.random() - 0.5)
}

// 写一个 axios 失败重新请求的函数
function retry (fn, times = 3) {
  return function (...args) {
    return fn(...args).catch(err => {
      console.error(err)
      if (times === 1) {
        return Promise.reject(err)
      }
      return retry(fn, times - 1)(...args)
    })
  }
}
// 写一个文件上传函数
function upload (file) {
  const formData = new FormData()
  formData.append('file', file)
  return axios.post('/upload', formData)
}

// 写一个函数，创建一个画布，可以用来签名
function createCanvas (width, height) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, width, height)
  ctx.strokeStyle = '#000'
  ctx.lineWidth = 2
  ctx.lineCap = 'round'
  let painting = false
  let lastPoint = { x: undefined, y: undefined }
  function drawLine (x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
  }
  canvas.onmousedown = e => {
    painting = true
    lastPoint = { x: e.clientX, y: e.clientY }
  }
  canvas.onmousemove = e => {
    if (painting) {
      const x = e.clientX
      const y = e.clientY
      drawLine(lastPoint.x, lastPoint.y, x, y)
      lastPoint = { x, y }
    }
  }
  canvas.onmouseup = e => {
    painting = false
  }
  return canvas  
}

const canvas =  createCanvas(300, 300)
document.body.appendChild(canvas)
