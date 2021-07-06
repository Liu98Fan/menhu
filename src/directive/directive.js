import store from '@/store'
import Vue from 'vue'
/**权限指令**/
const login = Vue.directive('login', {
    bind: function (el, binding, vnode) {
        let login = store.getters['login']
        el.style.display = login?'':'none'
    }
});
export default  {login}
