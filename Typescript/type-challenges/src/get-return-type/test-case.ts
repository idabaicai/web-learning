type MyReturnType<T extends (...arg: any) => any> = T extends (
  ...arg: any
) => infer X
  ? X
  : never;

const fn: (arg: boolean) => 123 = () => {
  return 123;
};

type T50 = typeof fn;

type T51 = MyReturnType<T50>;

type T52 = ReturnType<() => Promise<any>>;
