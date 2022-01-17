
// fix: process.env.TEXT_STYLE === undefined
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [ String ],
})

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = function(done) {
  const user1 = new Person({
    name: 'AAA',
    age: 22,
    favoriteFoods: [ 'apple', 'orange' ]
  });

  user1.save((err, data) => {
    if (err) return console.error(err);
    // done(null, data)
  });
}
// createAndSavePerson()

const users = [{
  name: 'AAB', 
  age: 18,
  favoriteFoods: [ '苹果', '香蕉' ]
}, {
  name: 'AAC', 
  age: 20,
  favoriteFoods: [ '苹果1', '香蕉1' ]
}]

const createUsers = (users, done) => {
  Person.create(users, (err, people) => {
    if(err) return console.log(err)
    done(null, people)
  })
}
createUsers(users)


// express
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