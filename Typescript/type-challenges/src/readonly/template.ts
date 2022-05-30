type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
