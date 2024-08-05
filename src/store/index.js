import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import token from "./modules/token"

export default createStore({
    modules: {
        token,
    },
    plugins: [
        createPersistedState({ storage: window.sessionStorage })
    ]
})
