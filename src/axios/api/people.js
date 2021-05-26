import { axios } from '../request'

export const requestInfo = ()=>{
    return axios.get('/people/info')
}
