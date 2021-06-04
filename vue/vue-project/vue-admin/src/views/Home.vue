<template>
  <div class="home">
    home
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getInfo } from '@/api/home'
export default Vue.extend({
  data () {
    return {
      name: 'we'
    }
  },
  created () {
    getInfo()
  }
})
</script>
