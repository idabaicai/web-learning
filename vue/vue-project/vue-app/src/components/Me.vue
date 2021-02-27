<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>
<script>
export default {
  name: 'Me',
  props: {
    name: String
  },
  mounted () {
    // debugger
  }
}
</script>
<style lang="less" scoped>
  h1 {
    color: purple;
  }
</style>
