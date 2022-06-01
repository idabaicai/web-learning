type Length<T extends readonly any[]> = T['length'];

type T = Length<['a' | 'b']>;
