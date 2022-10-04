import axios from "axios";

export default {
    listModCO(){
        return axios.get('/modco')
    },

    addModCO(mod){
        return axios.post('/modco/new', mod)
    }
};