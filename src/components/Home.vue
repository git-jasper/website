<template>
  <div class="hello">
    <div class="name">
      <img src="../assets/img/name.png" class="name-img">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  display: flex;
  width: 99vw;
}
.name-img {
  padding-top: 40px;
  margin: auto;
  max-width: 90%;
  filter:drop-shadow(2px 2px 2px white);
}
</style>
