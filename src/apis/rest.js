import axios from "axios";
import store from "@/store";

// axios.defaults.baseUrl =
const rest = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    withCredentials: true,
    timeout: 5000
})

rest.interceptors.request.use(
    (config) => {
        config.headers['Authorization'] = store.state.token.access_token;
        return config;
    },
    (error) => {
        console.log('rest.interceptors.request', error)
    }
)

rest.interceptors.response.use(
    (response) => {
        let data = response.data
        if(response.status == 200 || response.status == 404){
            if(typeof data == 'undefined' || data == null || data == '') return true
            else return data
        }else if(response.status == 400 || response.status == 404){
            return Promise.reject( new Error(data.message || 'Error') )
        }else if(response.status == 401){
            console.log('auth', data.message)
        }
        return response
    },
    (error) => {
        if(error.status == 401){
            console.log('error auth', error)
        }
        return Promise.reject(error)
    }
)

export default rest
