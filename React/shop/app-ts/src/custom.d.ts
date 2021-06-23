// 对 css 模块化加载支持

declare module "*.css" {
  const css: { [key: string]: string };
  export default css
}