<template>
  <div class="home">
    <el-button>test</el-button>
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
