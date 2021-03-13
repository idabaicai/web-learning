app.component('diractive-demo', {
  props: {
    top: {
      type: Number
    },
    distance: {
      type: Number,
      default() {
        return 300
      }
    }
  },
  template:
  /*html */
  `
    <div>
      <p>页面刚加载实现聚焦: </p>
        <input ref="input" />
      <h3>使用指令实现自动聚焦：</h3>
        <input v-focus />
      <h3>使用指令实现样式操作:</h3>
      <div class="header" v-pos="top">
        <p> 使用了 v-pos 指令后距离顶部x像素</p>
      </div>
      <div class="header" v-pos2:left="distance">
        <p>使用v-pos2加参数向左侧移动</p>
      </div>
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