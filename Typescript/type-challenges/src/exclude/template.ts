type T1 = Exclude<'a' | 'b' | 'c', 'a'>;

type MyExclude<T, U> = T extends U ? never : T;
