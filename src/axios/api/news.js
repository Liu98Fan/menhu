import { axios } from '../request'

export const requestInfo = ()=>{
    return axios.get('/news/list')
}
