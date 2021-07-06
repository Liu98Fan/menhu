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
    token:null,
    loading:false,
  },
  mutations: {
    //save the select menu
    SELECT_MENU:(state,menuSelect)=>{
        state.menuSelect = menuSelect
    },
    LOGIN:(state,{username,token})=>{
        state.user.username = username
        state.token = token
        state.login = true
    },
    LOGIN_OUT:(state)=>{
        state.user = {}
        state.login = false
    },
    LOAD_TRIGGER(state, load) {
      state.loading = load
    }
  },
  actions: {
    selectMenu({commit},menuSelect){
      commit('SELECT_MENU',menuSelect)
    },
    login({commit},{username,token}){
      commit('LOGIN',{username,token})
    },
    logOut({commit}){
      commit('LOGIN_OUT')
    },
    loadTrigger(context,load){
      context.commit("LOAD_TRIGGER",load);
    }
  },
  modules: {
  },
  getters,
  plugins: [createPersistedState()]
})
