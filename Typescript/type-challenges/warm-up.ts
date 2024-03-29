// type HelloWorld = string;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  desc?: string;
}
type KeyOf = keyof Todo;
const keys: KeyOf = 'desc';
/**
 * PICK UP
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

// const todo: TodoPreview = {
//   title: '',
//   completed: true,
// };

/**
 * Read Only
 */
// type MyReadOnly<T> = {
//   readonly [P in keyof T]: T[P];
// };

// const todo1: MyReadOnly<Todo> = {
//   title: 'title',
//   description: 'this is a todo',
//   completed: true,
// };

// todo1.title = 'change title'

/**
 * Tuple to Object
 */

const tuple1 = ['tesla', 'model3', 'model X', 'model Y'] as const;

type TupleToObject1<T extends readonly string[]> = {
  [P in T[number]]: P;
};

type Result = TupleToObject<typeof tuple>;

// type T = typeof tuple;

// const a1: arr1 = ['a', 'b', 'c'];
type First1<T extends any[]> = T extends [infer First, ...any[]]
  ? First
  : never;
type First2<T extends any[]> = T extends [] ? never : T[0];

type Head1 = First<arr1>;
type Head2 = First2<arr1>;

const str: Head1 = 'a';

// Length of tuple

type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['F9', 'FH', 'DN'];

// type Length<T extends { length: number }> = T['length'];
type Length1<T extends readonly any[]> = T['length'];

type teslaLen = Length<tesla>;
type spaceXLen = Length<spaceX>;

// type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

type MyExclude1<T, U> = T extends U ? never : T;

// type T1 = MyExclude<1 | 2 | 3, 2>;
