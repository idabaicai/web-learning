app.component('base-dynamic', {
  data() {
    return {
      msg: 'Hello dynamic'
    }
  },
  template:
  /*html */
  `
  <div>
    <h2>{{ msg }}</h2>
  </div>
  `,
  methods: {
    say() {
      console.log('I am baseDynamic component');
    }
  }
})
app.component('input-item', {
  template:
  /*html */
  `
    <div>
      <input />
    </div>
  `
})
// 异步组件
app.component('async-item', Vue.defineAsyncComponent(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        template: `<div>this is a async component</div>`
      })
    }, 2000)
  })
}))

// 多级组件传参
// 1 级
app.component('child', {
  props: ['child'],
  template:
  /*html */
  `
    <child-child :child="child"></child-child>
  `
})
// 2 级
app.component('child-child', {
  props: ['child'],
  inject: ['count'],
  template: 
  /*html */
  `
    <div>
      <p> 我是一级一级传下来的： {{ child }}</p>
      <p>我是inject进来的: {{ count }}</p>
    </div>
  `
})