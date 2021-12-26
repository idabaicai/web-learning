const http = require('http')
const fs = require('fs')

const serve = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

const port = 8888
const hostName = '127.0.0.1'

serve.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}`);
})