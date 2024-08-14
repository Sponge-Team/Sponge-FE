export default{
    state: {
        mode: 'LIST',
        title: '',
        step: 'MAIN',
        percentage: 0,
    },
    mutations: {
        SET_PROFILE_LEVEL: (state, profile) => {
            state.mode = profile.mode
            state.title = profile.title
            state.step = profile.step
            state.percentage = profile.percentage
        },
    },
    actions: {
        setProfileLevel({ commit }, profile){
            commit('SET_PROFILE_LEVEL', profile)
        },
    },
    getters: {
        getProfileLevel: state => {
            return {
                mode: state.mode,
                title: state.title,
                step: state.step,
                percentage: state.percentage,
            }
        },
    }
}
