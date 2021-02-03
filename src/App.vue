<template>
  <div id="app">
    <Nav/>
    <Home msg="Welcome to my page"/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Home
  }
}
</script>

<style>
#app {
  color: white;
}
body{
  background-color: black;
}
</style>
