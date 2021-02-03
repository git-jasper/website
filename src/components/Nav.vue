<template>
  <div class="navbar">
    <router-link to="/" tag="div">Home</router-link>
    <router-link to="/contact" tag="div">Contact</router-link>
    <router-link to="/login" tag="div">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
}

</style>
