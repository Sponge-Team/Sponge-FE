import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import token from "./modules/token"
import profile from "@/store/modules/profile.js";

export default createStore({
    modules: {
        token,
        profile
    },
    plugins: [
        createPersistedState({ storage: window.sessionStorage })
    ]
})
