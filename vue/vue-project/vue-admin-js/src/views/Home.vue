<template>
  <div class="home">
    <h2>home123</h2>
  </div>
</template>
<script>
import '../mock/home'
import axios from 'axios'
// import { getMockData } from '../api/home'
export default {
  created () {
    axios.get('api/home')
      .then(res => {
        console.log(res)
      })
    // getMockData('api/home')
  }
}
</script>
