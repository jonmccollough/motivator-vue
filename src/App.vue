<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || "The Motivator";
      },
      immediate: true
    }
  }
};
</script>
<style>
 @import './assets/Stylesheet.css'
</style>