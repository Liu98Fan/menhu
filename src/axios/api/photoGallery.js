import { axios } from '../request'

export const requestLabPhoto = ()=>{
    return axios.get('/photo/lab')
}
export const requestGroupPhoto = ()=>{
    return axios.get('/photo/group')
}
