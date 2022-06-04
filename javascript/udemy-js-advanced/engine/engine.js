function myEngine(code) {
    return code.split(/\s+/);
}
var res = myEngine('const    engine = "my engine1"');
console.log(res);
