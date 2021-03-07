app.component('base-count', {
  props: {
    num: {
      type: Number,
      required: true
    },
    val: {
      type: Number
    }
  },
  // 可以通过emits属性校验参数
  // emits: {
  //   add: (value) => {
  //     if(value > 0) {
  //       return true;
  //     }
  //     return false;
  //   }
  // },
  template: 
  /*html */
  `
  <div>
    <p>num: {{ num }}</p>
    <button @click="add">add</button>
    <p>val: {{ val }}</p>
    <button @click="change">change</button>
  </div>
  `,
  methods: {
    add () {
      this.$emit('add', 2)
    },
    change() {
      this.$emit('update:val', this.val + 3)
    }
  }
})