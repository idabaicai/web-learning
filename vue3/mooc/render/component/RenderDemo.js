/**
 * render function
 */
app.component('render-demo', {
  props: {
    level: {
      type: Number,
      default() {
        return 1
      }
    }
  },
  template:
  /*html */
  `
    <div>
      <h1 v-if="level === 1"><slot /></h1>
      <h2 v-if="level === 2"><slot /></h2>
      <h3 v-if="level === 3"><slot /></h3>
      <h4 v-if="level === 4"><slot /></h4>
    </div>
  ` 
})
// 等价于
app.component('render-function', {
  props: {
    level: {
      type: Number
    }
  },
  render() {
    const { h } = Vue;
    return h('h' + this.level, {}, this.$slots.default())
  }
})