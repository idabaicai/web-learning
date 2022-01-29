
// fix: process.env.TEXT_STYLE === undefined
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

// express
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/public', express.static(__dirname + '/public'));

const userRouter = require('./routes/user')
app.use('/user',userRouter)

app.listen('6688', () => {
  console.log('serve run in http://localhost:6688');
})