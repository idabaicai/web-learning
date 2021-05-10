interface User{
  name: string,
  id: number,
}

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount('dabai', 1001)
console.log(user)

// Unions

type MyBool = false | true;
type Gender = 'male' | 'famale'
type LockState = 'locked' | 'unlocked'

const sex: Gender = 'male'
const lockState1: LockState = 'locked'

// Generics

type StringArray = Array<string>
type ObjectWithNameArray = Array<{name: string}>

const arr1: StringArray = ['str1', 'str2']
const objWithName: ObjectWithNameArray = [
  { name: '23' }
]
console.log(objWithName)

// Structrual Type System
interface Pointer {
  x: number;
  y: number;
}

function logPoint(p: Pointer) {
  console.log(p)
}
const p1: Pointer = {
  x: 12.2,
  y: 10.6
}
console.log(p1);
