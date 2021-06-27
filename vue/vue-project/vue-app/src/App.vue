<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
    </div>
    <transition name="root">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less">
  .root-enter-active, .root-leave-active {
    transition: all .5s;
  }
  .root-enter, .root-leave-to {
    opacity: 0;
    transform: translateY(-100px);
  }
</style>
