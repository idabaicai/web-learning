type MyReadonly2<T, K extends keyof T> = {
  readonly [P in K]: T[P];
};

interface IUser {
  name: string;
  age: number;
}

type T70 = MyReadonly2<IUser, 'age'>;

const user1: T70 = {
  // name: 'AAA',
  age: 20,
};
