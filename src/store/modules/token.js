export default{
    state: {
        access_token: '',
        refresh_token: '',
        lgnId: '',
        google: null,
        userType: null,
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.access_token = token.access_token
            state.refresh_token = token.refresh_token
            state.lgnId = token.lgnId
            state.userType = token.userType
        },
        DEL_TOKEN: (state) => {
            state.access_token = ''
            state.refresh_token = ''
            state.lgnId = ''
            state.userType = null
        },
        SET_GOOGLE: (state, token) => {
            state.google = token.google
            state.userType = token.userType
        },
        DEL_GOOGLE: (state) => {
            state.google = null
            state.userType = null
        },
    },
    actions: {
        setToken({ commit }, token){
            commit('SET_TOKEN', token)
        },
        delToken({ commit}){
            commit('DEL_TOKEN')
        },
        setGoogle({ commit }, token){
            commit('SET_GOOGLE', token)
        },
        delGoogle({ commit}){
            commit('DEL_GOOGLE')
        },
    },
    getters: {
        getToken: state => {
            return {
                access_token: state.access_token,
                refresh_token: state.refresh_token,
            }
        },
        getGoogle: state => {
            return {
                google: state.google,
                userType: state.userType
            }
        }
    }
}
