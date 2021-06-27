<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="say">click</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data () {
    return {
      word: 'learn vue'
    }
  },
  name: 'Home',
  components: {
  },
  methods: {
    say () {
      alert(this.word)
    }
  },
  created () {
    console.log(process.env)
  }
}
</script>
