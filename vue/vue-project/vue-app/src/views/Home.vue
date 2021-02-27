<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Hello msg="hello my vue123" />
    <button @click="say">click</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'
export default {
  data () {
    return {
      word: 'learn vue'
    }
  },
  name: 'Home',
  components: {
    Hello
  },
  methods: {
    say () {
      alert(this.word)
    }
  }
}
</script>
