
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
  static logNbSides() {
    return 'I have 5 sides'
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
  static logDescription() {
    // 调用父类 static methods
    return super.logNbSides() + ' which are all equal'
  }
}
const s1 = new Square(20)
console.log(s1, 's1')
console.log(s1.area) // 400
console.log(Square.logDescription()) // I have 5 sides which are all equal