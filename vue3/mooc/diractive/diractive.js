// 自定义指令 全局

/**
 * 自动聚焦
 */
app.directive('focus', {
  mounted(el) {
    console.log(el);
    el.focus();
  }
})

/**
 * 自动距离顶部500px
 */
app.directive('pos', {
  // 挂载的时候执行
  mounted(el, binding) {
    console.log('pos directive mounted');
    el.style.top = `${binding.value}px`;
  },
  // 数据更新的时候执行
  updated(el, binding) {
    console.log('pos directive updated');
    el.style.top = `${binding.value}px`
  } 
})
// 当 mounted 中的功能和updated中的一致时等价于
app.directive('pos1', (el, binding) => {
  console.log(binding);
  el.style.top = `${binding.value}px`
})
// 指定参数
app.directive('pos2', (el, binding) => {
  el.style[binding.arg] = `${binding.value}px`
})