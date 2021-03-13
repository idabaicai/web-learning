/**
 * teleport传送门
 */
app.component('teleport-demo', {
  data() {
    return {
      isShow: false
    }
  },
  template:
  /*html */
  `
    <div>
      <div class="area">
        <button @click="show">tele</button>
        <teleport to="body">
          <div class="mask" v-show="isShow"></div>
        </teleport>
      </div>
    </div>
  `,
  methods: {
    show() {
      this.isShow = !this.isShow;
    }
  }
})