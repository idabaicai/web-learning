var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log("(x: " + this.x + ", y: " + this.y + "),");
    };
    Point.prototype.getSum = function (p) {
        return p.x + p.y;
    };
    return Point;
}());
var p1 = new Point(10, 12);
