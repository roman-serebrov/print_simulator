import axios from "axios";

const instance = axios.create({
    baseURL: 'https://baconipsum.com/api/'
})


export const setTextAPI = {
    setext() {
        return instance.get('?type=all-meat&paras=2&start-with-lorem=1')
    }
}