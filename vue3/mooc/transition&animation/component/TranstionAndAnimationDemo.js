app.component('transtion-demo', {
  template: 
  /*html */
  `
  <div>
    <div :class="animate">hello animation</div>
    <button @click="handleClick">change</button>
    <div :class="transition" class="margin-top-20">transition</div>
    <button @click="handleTranstion">transtion</button>
    <h3>vue transition</h3>
    <div 
      class="transition"
      :style="styleObj"
    >hello vue transition</div>
    <button @click="handleVueTranstion">vue transtion</button>
    <h3>vue transtion component </h3>
    <p>学习单组件入场和出场动画</p>
    <transition>
      <div v-show="show">hello vue transition</div>
    </transition>
    <button @click="showElement">show/hidden</button>
  </div>
  `,
  data() {
    return {
      transition: {
        transition: true,
        blue: true,
        pink: false,
      },
      animate: {
        animation: true
      },
      styleObj: {
        backgroundColor: 'purple'
      },
      show: false,
    }
  },
  methods: {
    showElement() {
      this.show = !this.show
    },
    handleVueTranstion() {
      if(this.styleObj.backgroundColor === 'purple') {
        this.styleObj.backgroundColor = 'orange'
      } else {
        this.styleObj.backgroundColor = 'purple'
      }
    },
    handleClick() {
      this.animate.animation = !this.animate.animation;
    },
    handleTranstion() {
      this.transition.blue = !this.transition.blue;
      this.transition.pink = !this.transition.pink;
    }
  }
})