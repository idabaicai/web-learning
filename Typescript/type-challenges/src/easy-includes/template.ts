import type { Equal } from '@type-challenges/utils';
export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

type T30 = Includes<[1, 2, 3], 2>;

type T31 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;
type T32 = Includes<['model 3', 'model x', 'model y'], 'model z'>;
// 1. 用递归遍历数组

// 2. TS 的模块规范
//    - 如果有 export/import 的话，就是模块
//    - 否则，就是全局的
