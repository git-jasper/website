<template>
  <div>
    <div class="login">
      <form class="form" @submit.prevent="login">
        <h1>Log in</h1>
        <p>
          <input class="form-field" v-bind:style="inputStyle" type="text" v-model="username" placeholder="username">
        </p>
        <p>
          <input class="form-field" v-bind:style="inputStyle" type="password" v-model="password" placeholder="password">
        </p>
        <p>
          <button class="login-button">Log in</button>
        </p>
        <button @click.prevent="secure">test</button>
      </form>
    </div>
    <div class="img" v-bind:style="imgStyle">
      Who are you?
      <img src="../../assets/img/penguin.png" width="200"/>
    </div>
  </div>
 
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: null,
      password: null,
      inputStyle: {
          borderColor: 'whitesmoke'
      },
      imgStyle: {
          visibility: 'hidden'
      }
    }
  },
  methods: {
    login(){
      axios.post('http://localhost:8081/authenticate', {
        "username": this.username,
        "password": this.password
      })
      .then(response => {
        this.inputStyle.borderColor = 'green';
        this.$store.dispatch('setJWT', response.headers.jwt);
      })     
      .catch(() => {
        this.inputStyle.borderColor = 'red';
        this.imgStyle.visibility = 'visible';
      });
    },
    secure(){
      axios.post('http://localhost:8081/secure',{},{
        headers: {
          'jwt': this.$store.getters.getJWT
        }
      })
      .then(response => {
        this.message = response.data;
      })
      .catch(error => {
        this.message = 'Not Authenticated! - ' + error.response.status
      });
    }
  },
  name: 'LoginForm',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  display: flex;
  justify-content: center;
}
.img {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-inline: auto;
  font-weight: bold;
}

.form {
  padding-inline: 40px;
  padding-bottom: 20px;
  background-color: rgb(75, 75, 75);
  border-radius: 5px;
  box-shadow: 1px 1px 1px white;
}
.form-field {
  border: solid;
  border-radius: 4px;
  width: 224px;
  height: 30px;
  margin-top: 5px;
  padding-left: 10px;
}
.form-field:focus {
  outline: none;
}

.login-button {
  border: none;
  background-color: rgb(0, 140, 186);
  color: white;
  border-radius: 4px;
  font-weight: bold;
  width: 240px;
  height: 30px;
  margin-top: 20px;
}
.login-button:hover {
  background-color: rgb(0, 116, 155);
}
.login-button:focus {
  background-color: rgb(0, 116, 155);
  box-shadow: 2px 2px 2px black;
  outline: none;
}
</style>
