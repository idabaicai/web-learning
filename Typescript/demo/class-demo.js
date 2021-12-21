var Point = /** @class */ (function () {
    // x: number;
    // y: number;
    function Point(x, y) {
        if (y === void 0) { y = 12; }
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log("(x: " + this.x + ", y: " + this.y + "),");
    };
    Point.prototype.getSum = function () {
        return this.x + this.y;
    };
    return Point;
}());
var p1 = new Point(10, 20);
p1.drawPoint();
console.log(p1.getSum());
