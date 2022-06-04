type Concat<T extends any[], U extends any[]> = [...T, ...U];

type T20 = Concat<[1, 2], [3, 4]>;
type T21 = Concat<[], []>;

type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type First4<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type Tail<T extends any[]> = T extends [...infer Head, infer Last]
  ? Last
  : never;
type T22 = First3<[1, 2, 3]>;

type T33 = Tail<[1, 2, 3]>;
