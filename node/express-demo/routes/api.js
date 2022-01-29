const express = require('express')
const router = express.Router

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/view/index.html')
})

// middleware
router.use('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({
    now: req.time
  })
})

router.get('/json', (req, res) => {
  const str = process.env.TEXT_STYLE === 'UPPERCASE' ? 'HELLO EXPRESS' : 'hello express'
  res.json({
    msg: str
  })
})

router.get('/:word/echo', (req, res) => {
  console.log(word);
  res.json({
    echo: req.params.word
  })
})

module.exports = router