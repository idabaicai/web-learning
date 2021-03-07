const app = Vue.createApp({
  data() {
    return {
      value: 6,
      num: 1,
      str: 'hello',
      msg: 'main msg',
      currentItem: 'base-dynamic',
      child1: 'child1'
    }
  },
  // 多级组件数据流
  provide: {
    count: 10
  },
  methods: {
    handleAdd(step) {
      this.num += step;
    },
    handleClick() {
      if(this.currentItem === 'base-dynamic') {
        this.currentItem = 'input-item';
      } else {
        this.currentItem = 'base-dynamic'
      }
    }
  },
  mounted() {
    // ref 使用， 用来获取dom节点或组件引用的方法
    console.log(this.$refs.fooRef); // <h3>hello ref</h3>
    this.$refs.fooRef.innerHTML = 'hello ref'
    this.$refs.baseDynamicRef.say();  // I am baseDynamic component
  }
})