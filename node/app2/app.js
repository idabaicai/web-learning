
const http = require('http');
// const hostname = '81.69.42.187'
const hostname = '127.0.0.1'
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('hello world');
});

server.listen(port, hostname, () => {
  console.log(`Server runing at http://${hostname}:${port}`);
})