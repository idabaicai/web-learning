const http = require('http');
// 创建web服务器
const app = http.createServer();
// 当客户端发送请求的时候
app.on('request', (req, res) => {
    // 获取请求
    console.log(req.method);
    // 设置状态码
    res.writeHead(200, {
        // 'content-type': 'text/plain'
    });
    // 响应
    res.end('<h1>hello nodejs!</h1>');
});
// 监听端口
app.listen(8080);
console.log('the server is start...');
console.log('http://127.0.0.1:8080');