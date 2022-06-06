type MyParameter<T extends (...arg: any) => any> = T extends (
  ...arg: infer X
) => any
  ? X
  : never;

const foo = (arg1: string, arg2: number, arg3: boolean): void => {};

const T40 = typeof foo;

type T41 = Parameters<typeof foo>;

type T42 = MyParameter<typeof foo>;
type T43 = MyParameter1<typeof foo>;

type MyParameter1<T extends (...arg: any) => any> = T extends (
  ...arg: infer X
) => void
  ? X
  : never;
