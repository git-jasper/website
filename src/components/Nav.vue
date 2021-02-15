<template>
  <div class="navbar">
    <div class="nav-item">
      <router-link to="/" tag="div" class="nav-route">Home</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/projects" tag="div" class="nav-route">Projects</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/contact" tag="div" class="nav-route">Contact</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/login" tag="div" class="nav-route">Login</router-link>
    </div>
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
  border-bottom: 2px solid rgb(0, 116, 155);
}
.nav-item {
  margin-bottom: 20px;
}
.nav-route:hover {
  border-bottom: 2px solid;
  cursor: pointer;
}
.nav-route {
  font-size : 30px;
  border-bottom: 2px solid rgb(20, 20, 20);
}
</style>
