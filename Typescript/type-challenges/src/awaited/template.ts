// 知识点
// infer 设置一个未知类型变量, 只能在条件类型中使用

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X
  : never;
