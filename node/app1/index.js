const express = require('express');
const app = express();
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
    res.send('Link');
});
app.post('/name', (req, res) => {
    res.send('Pink');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))