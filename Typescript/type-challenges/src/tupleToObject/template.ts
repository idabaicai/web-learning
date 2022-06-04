const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P;
};

// keyof 得到数组的索引

// T[number] 遍历数组

type T6 = TupleToObject<typeof tuple>;
