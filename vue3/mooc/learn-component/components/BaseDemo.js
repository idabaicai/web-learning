app.component('base-demo', {
  props: {
    num: {
      type: Number
    },
    str: {
      type: String
    },
    modelModifiers: {
      default: () => ({})
    }
  },
  template: 
  /* html */
  `
  <div>
    <h1>{{ num }}</h1>
    <div :msg="$attrs" >msg</div>
    <p>modifiers str: {{ str }}</p>
    <button @click="handleChange">change</button>
  </div>
  `,
  methods: {
    handleChange() {
      console.log(this.str);
      let newValue = this.str + 'b';
      if(this.$attrs.strModifiers) {
        console.log('uppercase');
        newValue = newValue.toUpperCase();
      }
      this.$emit('update:str', newValue)
    }
  },
  mounted() {
    console.log(this.$attrs.strModifiers); // {uppercase:str: true}
    console.log(this.$attrs); // Proxy {msg: "main msg"}
  }
})