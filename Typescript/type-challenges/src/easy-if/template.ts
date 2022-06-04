type If<C extends boolean, T, F> = C extends true ? T : F;

type T10 = If<true, 'a', 'b'>;
type T11 = If<false, 'a', 'b'>;

type T13 = null extends boolean ? true : false;

// 参考： https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content
