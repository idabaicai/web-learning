app.component('plugin-demo', {
  data() {
    return {
    }
  },
  inject: ['name'],
  template:
  /*html */
  `
    <div>
      <div class="provide">
        {{ name }}
        <input v-focus />
      </div>
      <div>
      </div>
    </div>
  `,
  mounted() {
    console.log(this.$say);
    // console.log(this.$options.rules);
  }
})