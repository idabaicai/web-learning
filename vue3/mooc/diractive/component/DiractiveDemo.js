app.component('diractive-demo', {
  template:
  /*html */
  `
    <div>
      <p>页面刚加载实现聚焦: </p>
      <input ref="input" />
      <h3>使用指令实现自动聚焦：</h3>
      <input v-focus />
    </div>
  `,
  data() {
    return {
      diractive: 'hello diractive'
    }
  },
  mounted() {
    // this.$refs.input.focus();
  }
})