

// 自定义组件 
app.component('mixin-demo', {
  value: 'app value',
  data() {
    return {
      // 当组件中没有 property 时则使用mixin中的property
      // num: 23
    }
  },
  mixins: [mixin],
  template:
  /*html */
  `
    <div>
      <p> {{ num }} </p>
      <h3>{{ msg }}</h3>
      <button @click="add"> add </button>
      <h3>全局mixin</h3>
      <p>globalMixinNum: {{ globalMixinNum }} </p>
      <h3>使用 $options 获取自定义属性</h3>
      <p> 自定义属性： {{ this.$options.value }}</p>
    </div>
  `,
  methods: {
    // add() {
    //   this.num++;
    // } 
  },
  created() {
    // 先执行 mixin中的 hook 
    console.log('component life cycle');
  }
})