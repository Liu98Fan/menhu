import { axios } from '../request'

export const requestInfo = ()=>{
    return axios.get('/overview/info')
}
