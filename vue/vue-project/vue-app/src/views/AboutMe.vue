<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>my name is:</p>
    <Me name="Link123" />
  </div>
</template>
<script>
import Me from '../components/Me.vue'
export default {
  data () {
    return {
      msg: 'aboutMe msg'
    }
  },
  name: 'AboutMe',
  components: {
    Me: Me
  }

}
</script>
<style lang="less">
 p {
   color: pink;
 }
</style>
