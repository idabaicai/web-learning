<template>
  <div>
    user {{ id }}
    <p> this is params {{ $route.params }} </p>
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

<style>

</style>