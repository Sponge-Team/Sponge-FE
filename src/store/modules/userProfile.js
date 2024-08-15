export default {
  state: {
    name: '',
    image: '',
    role: 1,
  },
  mutations: {
    SET_USER_PROFILE: (state, profile) => {
      state.name = profile.name;
      state.image = profile.image;
      state.role = profile.role;
    }
  },
  actions: {
    setUserProfile({ commit }, profile) {
      commit('SET_USER_PROFILE', profile);
    }
  },
  getters: {
    getUserProfile: state => {
      return {
        name: state.name,
        image: state.image,
        role: state.role
      }
    }
  }
};