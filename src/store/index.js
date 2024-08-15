import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import token from "./modules/token"
import profile from "@/store/modules/profile.js";
import userProfile from "@/store/modules/userProfile.js";

export default createStore({
    modules: {
        token,
        profile,
        userProfile,
    },
    plugins: [
        createPersistedState({ storage: window.sessionStorage })
    ]
})
