<template>
  <div>
    <p>user {{ id }}</p>
    <p> this is params {{ $route.params }} </p>
    <div class="post">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      default () {
        return 1
      }
    },
  },
}
</script>
<style lang="less" scoped>
  .post {
    width: 800px;
    height: 600px;
    background-color: pink;
  }
</style>