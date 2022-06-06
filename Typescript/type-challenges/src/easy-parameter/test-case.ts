import type { Equal, Expect } from '@type-challenges/utils';

const foo = (arg1: string, arg2: number): void => {};

const bar = (arg1: boolean, arg2: { a: 'A' }): void => {};

const baz = (): void => {};

type cases = [
  Expect<Equal<MyParameter<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameter<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameter<typeof baz>, []>>
];
