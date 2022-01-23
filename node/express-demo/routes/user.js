const express = require('express');

const router = express.Router()

router.get('/list', (req, res) => {
  res.json([
    {id: 1, name: 'foo'},
    {id: 2, name: 'bar'},
  ])
})

router.post('/add', (req, res) => {
  console.log(req.body);
  res.json({
    name: req.body.name,
    age: req.body.age
  })
})

module.exports = router