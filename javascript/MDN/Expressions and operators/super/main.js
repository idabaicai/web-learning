
class Rectangle {
  constructor(width, height) {
    this.name = 'Rectangle'
    this.width = width
    this.height = height
  }
  sayName() {
    console.log(`My name is ${this.name}`)
  }
  get area () {
    return this.height * this.width
  }
  set area(value) {
    this._area = value
  }
}

const r1 = new Rectangle(20, 30)
console.log(r1, 'r1')
console.log(r1.area) // 600

class Square extends Rectangle {
  constructor(length) {
    // 调用父类 constructor
    super(length, length)
    this.name = 'Square'
  }
}
const s1 = new Square(20)
console.log(s1, 's1')
console.log(s1.area) // 400