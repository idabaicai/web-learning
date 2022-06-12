type MyOmit<T, K extends keyof T> = {
  [P in MyExclude<keyof T, K>]: T[P];
};

type T60<T> = Omit<T, 'K'>;
interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyOmit<Todo1, 'description' | 'title'>;

const Todo: TodoPreview = {
  completed: false,
};
