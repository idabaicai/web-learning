// 自定义指令 全局

app.directive('focus', {
  mounted(el) {
    console.log(el);
    el.focus();
  }
})