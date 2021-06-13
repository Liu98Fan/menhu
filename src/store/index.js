import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuSelect:['overview'],
    user:{
      username:'',
    },
    login:false,
  },
  mutations: {
    //save the select menu
    SELECT_MENU:(state,menuSelect)=>{
        state.menuSelect = menuSelect
    },
    LOGIN:(state,username)=>{
        state.user.username = username
        state.login = true
    },
    LOGIN_OUT:(state)=>{
        state.user = {}
        state.login = false
    }
  },
  actions: {
    selectMenu({commit},menuSelect){
      commit('SELECT_MENU',menuSelect)
    },
    login({commit},username){
      commit('LOGIN',username)
    },
    logOut({commit}){
      commit('LOGIN_OUT')
    }
  },
  modules: {
  },
  getters,
  plugins: [createPersistedState()]
})
