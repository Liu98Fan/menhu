import { axios } from '../request'

// export const requestInfo = ()=>{
//     return axios.get('/overview/info')
// }

export const requestInfo = ()=>{
    return axios.get('/overview')
}

export const saveInfo = (data)=>{
    return axios.put(`/overview/1/`,{content:data})
}
