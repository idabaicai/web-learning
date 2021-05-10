
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
