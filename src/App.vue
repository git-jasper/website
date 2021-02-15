<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
  }
}
</script>

<style>
#app {
  color: white;
}
body{
  font-family: Arial;
  background-color: rgb(20, 20, 20);
}
</style>
