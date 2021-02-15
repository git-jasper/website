<template>
  <div class="form">
    <LoginForm/>
  </div>
 
</template>

<script>
import LoginForm from './LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin-top: 30px;
}

</style>
