## 参考

- [AST Explorer](https://astexplorer.net/)
- [List of ES Engine](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines)


## 题目

1. simple engine

```ts
function myEngine(code:string) {
  return code.split(' ')
}

```

## tips

> 使用 `tsc -w engine.ts` 实时将 TS 文件编译成 JS 文件
> 使用 `npx nodemon engine.js` 运行最新的 js 文件，提升开发体验