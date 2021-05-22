
interface Ipoint {
  x: number,
  y: number,
  drawPoint: () => void,
  getSum: (p: Ipoint) => number
}

class Point implements Ipoint {
  // x: number;
  // y: number;
  constructor(public x: number, public y: number = 12) {
    // this.x = x;
    // this.y = y;
  }
  drawPoint() {
    console.log(`(x: ${this.x}, y: ${this.y}),`)
  }
  getSum() {
    return this.x + this.y
  }
}

const p1 = new Point(10, 20)
p1.drawPoint()
console.log(p1.getSum());


