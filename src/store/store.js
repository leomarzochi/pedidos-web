import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    email: null,
    uid: null,
    isUserLogedIn: false,
    dialog: false,
    produtos: []
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
    },
    setDialog (state, dialog) {
      state.dialog = dialog
    },
    setProdutos (state, produtos) {
      state.produtos = produtos
    }
  },
  actions: {
    setUid ({commit}, uid) {
      commit('setUid', uid)
    },
    setEmail ({commit}, email) {
      commit('setEmail', email)
    },
    setDialog ({commit}, dialog) {
      commit('setDialog', dialog)
    }
  }
})
