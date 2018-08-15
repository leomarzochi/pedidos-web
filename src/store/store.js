import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    email: null,
    uid: null,
    isUserLogedIn: false
  },
  mutations: {
    setUid (state, uid) {
      state.uid = uid
      if (uid) {
        state.isUserLogedIn = true
      } else {
        state.isUserLogedIn = false
      }
    },
    setEmail (state, email) {
      state.email = email
    }
  },
  actions: {
    setUid ({commit}, uid) {
      commit('setUid', uid)
    },
    setEmail ({commit}, email) {
      commit('setEmail', email)
    }
  }
})
