import Vue from 'vue'
import Vuex from 'vuex'
import getters from "./getters";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuSelect:['overview'],
  },
  mutations: {
    //save the select menu
    SELECT_MENU:(state,menuSelect)=>{
        state.menuSelect = menuSelect
    }
  },
  actions: {
    selectMenu({commit},menuSelect){
      commit('SELECT_MENU',menuSelect)
    }
  },
  modules: {
  },
  getters,
  plugins: [createPersistedState()]
})
