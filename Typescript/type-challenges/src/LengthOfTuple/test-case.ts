import type { Equal, Expect } from '@type-challenges/utils';

const tesla = ['model 3', 'model X', 'model Y', 'tesla'] as const;

const coin = ['dog coin', 'bit coin', 'ETH'] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof coin>, 3>>,
  // @ts-expect-error
  Length<5>
];
