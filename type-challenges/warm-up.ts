type HelloWorld = string;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  desc?: string;
}
/**
 * PICK UP
 */

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// type TodoPreview = Pick<Todo, 'title' | 'completed'>;

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: '',
  completed: true,
};

/**
 * Read Only
 */
type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

const todo1: MyReadOnly<Todo> = {
  title: 'title',
  description: 'this is a todo',
  completed: true,
};

// todo1.title = 'change title'

/**
 * Tuple to Object
 */

const tuple = ['tesla', 'model3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P;
};

type Result = TupleToObject<typeof tuple>;
const res: Result = {
  'model X': 'model X',
  'model Y': 'model Y',
  model3: 'model3',
  tesla: 'tesla',
};

type T = typeof tuple;
