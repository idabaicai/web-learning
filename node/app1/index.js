const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// 处理静态资源
app.use(express.static('public'));
// 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

// app.get('/', (req, res) => res.send('Hello World!'));
// app.use((req, res) => {
//     res.json({
//         name: 'Link',
//         age: 22
//     });
// });
// 跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/name', (req, res) => {
    res.send('Link,传统url传参! ' + req.query.id);
});
app.get('/age/:id', (req, res) => {
    res.send('18' + 'Restful形式的url传递参数' + req.params.id);
});
app.get('/job', (req, res) => {
    res.send('前端人');
});
// 接受delete请求
app.delete('/color/:id', (req, res) => {
    res.send('delete request param:' + req.params.id);
});
// 接受post请求
app.post('/sex', (req, res) => {
    res.send('post req: ' + req.body.name + '-----' + req.body.pwd);
});
// 接受put请求
app.put('/edit/:id', (req, res) => {
    res.send('put req: ' + req.params.id + '---' + req.body.name + '-----' + req.body.pwd);
});

// 接受put请求 返回json数据
app.put('/set/:id', (req, res) => {
    res.json({
        msg: 'success',
        code: 1
    });
});


// 接收axios请求数据
app.get('/ax', (req, res) => {
    res.send('axios:' + req.query.id);
});
// 接收axios restful 形式
app.get('/ax-restfull/:id', (req, res) => {
    res.send('axios-restfull:' + req.params.id);
});
// 接收axios params形式传参
app.get('/ax-param', (req, res) => {
    res.send('axios-param:' + req.query.id);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))