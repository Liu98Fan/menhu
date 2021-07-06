import { axios } from '../request'

export const requestLogin = (data)=>{
    return axios.post('/login/',data)
}
