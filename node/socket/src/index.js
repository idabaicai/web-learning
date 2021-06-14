
const http = require('http');
const express = require('express')
const { Server } = require('socket.io')

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on('connection', (socket) => {
  // 接受 msg
  socket.on('chat message', (msg) => {
    io.emit('chat message', `${msg} is sending`);
    console.log(`message: ${msg}`);
  })
  console.log('a user connected');
  // 断开链接
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })
})


server.listen(3000, () => {
  console.log('server is running..');
})

// broadcast

