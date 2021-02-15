import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      jwt: ''
  },
  mutations: {
    SET_JWT(state, jwt) {
      state.jwt = jwt
    }
  },
  actions: {
    setJWT(context, jwt) {
      context.commit("SET_JWT", jwt)
    }
  },
  getters: {
    getJWT(state) {
      return state.jwt;
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
