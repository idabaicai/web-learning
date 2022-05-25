type HelloWorld = string;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  desc?: string;
}
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
// type TodoPreview = Pick<Todo, 'title' | 'completed'>;

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
  title: '',
  completed: true,
};

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

const todo1: MyReadOnly<Todo> = {
  title: 'title',
  description: 'this is a todo',
  completed: true,
};

// todo1.title = 'change title'
