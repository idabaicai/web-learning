type Push<T extends readonly any[], U> = [...T, U];

type T40 = Push<[0, 1], 2>;
