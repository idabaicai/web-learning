<template>
  <div class="home">
    <h2>home123</h2>
  </div>
</template>
<script>
import '../mock/home'
// import { getUserList, test } from '../api/user'
import { getUserList, test } from '@/api/user'

export default {
  methods: {
    getBaseUrl () {
      console.log(process.env)
    }
  },
  created () {
    this.getBaseUrl()
    test()
      .then(res => {
        console.log(res)
      })
    getUserList()
      .then(res => {
        console.log(res)
      })
  }
}
</script>
