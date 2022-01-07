
// fix: process.env.TEXT_STYLE === undefined
require('dotenv').config()
const express = require('express');

const app = express();

app.use('/public', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view/index.html')
})

// middleware
app.use('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({
    now: req.time
  })
})

app.get('/json', (req, res) => {
  const str = process.env.TEXT_STYLE === 'UPPERCASE' ? 'HELLO EXPRESS' : 'hello express'
  res.json({
    msg: str
  })
})

app.listen('6688', () => {
  console.log('serve run in http://localhost:6688');
})