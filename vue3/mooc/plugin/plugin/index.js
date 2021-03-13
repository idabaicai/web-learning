
const plugin = {
  install(app, options) {
    // 注入
    app.provide('name', 'link')
    // 自定义指令
    app.directive('focus', {
      mounted(el) {
        el.focus();
      }
    })
    // mixin
    // app.mixin({
    //   mounted() {
    //     console.log('mixin mounted');
    //   }
    // })
    // 扩展
    app.config.globalProperties.$say = 'hello global properties'
  }
}
const validator = {
  install(app, options) {
    app.mixin({
      created() {
        for(let key in this.$options.rules) {
          const item = this.$options.rules[key];
          this.$watch(key, (value) => {
            const result = item.validate(value);
            if(result) console.log(item.message);
          })
        }
      }
    })
  }
}