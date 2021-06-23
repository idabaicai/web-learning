
const BASE_URL = 'localhost'
const socket = new WebSocket(`ws://${BASE_URL}:5000/index.js`);
socket.send('hello world');

socket.onmessage = (e) => {
  console.log(e);
}