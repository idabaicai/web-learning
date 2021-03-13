app.component('setup-demo', {
  template: 
  /*html */
  `
    <div>
      使用ref {{ name }}
      <button @click="say">click</button>
      <p>使用reactive: {{ div.width }} </p>
      <p>使用toRefs API: height:  {{ height }} </p>
    </div>
  `,
  // before created 实例被完全初始化之前
  setup(props, context) {
    const { ref, reactive, readonly, toRefs } = Vue;
    // 将AAA变成 proxy({value: 'AAA'}) 的响应式引用
    /**
     * 通过 proxy 对数据进行封装，当数据变化时，触发模板等内容的更新
     * ref 处理基础数据
     * reactive 处理非基础数据
     * readyOnly 设置数据为只读
     */
    // ref demo
    let name = ref('AAA')
    setTimeout(() => {
      name.value = 'Link'
    }, 2000);
    // reactive demo
    const div = reactive({
      width: 200,
      height: 160,
      class: 'reactive'
    })
    setTimeout(() => {
      div.width = 300;
    }, 2000)
    // 使用readOnly API
    const readOnlyLove = readonly(['bilibili', 'github', 'google'])
    setTimeout(() => {
      readOnlyLove[0] = 'baidu' // Set operation on key "0" failed: target is readonly
    }, 2000)
    // 使用 toRefs API
    let { height } = toRefs(div); // after 2s height = 500
    setTimeout(() => {
      div.height = 500;
    }, 2000)
    return {
      name,
      div,
      height,
      readOnlyLove,
      say() {
        console.log('setup say');
      }
    }
  },
  created() {
    console.log('created');
    console.log(this.$options.setup());
  } 
})