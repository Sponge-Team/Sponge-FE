export default{
    state: {
        access_token: '',
        refresh_token: '',
        lgn_id: '',
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.access_token = token.access_token
            state.refresh_token = token.refresh_token
            state.lgn_id = token.lgn_id
        },
        DEL_TOKEN: (state) => {
            state.access_token = ''
            state.refresh_token = ''
            state.lgn_id = ''
            state.nm = ''
            state.bld_id = ''
        },
    },
    actions: {
        setToken({ commit }, token){
            commit('SET_TOKEN', token)
        },
        delToken({ commit}){
            commit('DEL_TOKEN')
        },
    },
    getters: {
        getToken: state => {
            return {
                access_token: state.access_token,
                refresh_token: state.refresh_token,
            }
        },
    }
}
