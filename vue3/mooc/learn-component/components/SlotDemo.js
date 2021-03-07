app.component('slot-demo', {
  data() {
    return {
      list: ['Xiaomi', 'HUAWEI', 'Iphone']
    }
  },
  template:
  /*html */
  `
  <div>
    <input />
    <slot name="submit">
      <button @click="handleClick">submit</button>
    </slot>
    <p>phone list</p>
    <slot v-for="item in list" :key="item" :item="item"></slot>
  </div>
  `,
  methods: {
    handleClick() {
      console.log('click');
    }
  }
})