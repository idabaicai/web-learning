// vue mixin
app.mixin({
  data() {
    return {
      globalMixinNum: 100
    }
  }
})

// 局部mixin
  // mixin 的优先级比组件的优先级小
  const mixin = {
    value: 'mixin value',
    // data mixin
    data() {
      return {
        num: 100,
        msg: 'hello vue mixin',
        value: 'mixin value'
      }
    },
    // methods mixin 优先级低于组件自身 method
    methods: {
      add() {
        console.log('mixin add');
      }
    },
    // lifecycil hook minxin
    created() {
      console.log('mixin life cycle'); // mixin lifecycile
    }
  }