
// fix: process.env.TEXT_STYLE === undefined
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

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

app.get('/:word/echo', (req, res) => {
  console.log(word);
  res.json({
    echo: req.params.word
  })
})

app.get('/list/get', (req, res) => {
  console.log(req.query);
  res.json({
    ...req.query
  })
})

app.post('/user/add', (req, res) => {
  console.log(req.body);
  res.json({
    name: req.body.name,
    age: req.body.age
  })
})

app.listen('6688', () => {
  console.log('serve run in http://localhost:6688');
})