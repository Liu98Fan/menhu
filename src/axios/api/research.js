import { axios } from '../request'

export const requestInfo = ()=>{
    return axios.get('/research')
}

export const addResearch = (data)=>{
    return axios.post('/research/',data)
}

export const editResearch = (data,id)=>{
    return axios.put(`/research/${id}/`,data)
}

export const deleteResearch = (id)=>{
    return axios.delete(`/research/${id}/`)
}

export const directionList = ()=>{
    return axios.get('/research')
}
