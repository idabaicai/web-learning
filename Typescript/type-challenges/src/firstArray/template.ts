type arr1 = ['a', 'b', 'c'];

// type First<T extends any[]> = T extends [] ? never : T[0]; // 1
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]; // 2
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never; // 3
// 看能否结构出来一个 First
type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type T1 = First<arr1>;

type T2 = First<[]>; // undefined

// 获取 array 的 length

type T3 = arr1['length'];
