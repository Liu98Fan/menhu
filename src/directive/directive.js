import store from '@/store'
import Vue from 'vue'
/**ๆ้ๆไปค**/
const login = Vue.directive('login', {
    bind: function (el, binding, vnode) {
        let login = store.getters['login']
        el.style.display = login?'':'none'
    }
});
export default  {login}
