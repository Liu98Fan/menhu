const getters = {
    menuSelect:state=>state.menuSelect,
    user:state=>state.user,
    login:state=>state.login,
    token:state=>state.token,
    loading:(state)=>{
        return state.loading
    }
}

export default getters
