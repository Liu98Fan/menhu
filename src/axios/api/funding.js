import { axios } from '../request'

export const requestInfo = ()=>{
    return axios.get('/funding')
}

export const fundingList = ()=>{
    return axios.get('/funding')
}

export const addFunding = (data)=>{
    return axios.post('/funding/',data)
}

export const editFunding = (data,id)=>{
    return axios.put(`/funding/${id}/`,data)
}

export const deleteFunding = (id)=>{
    return axios.delete(`/funding/${id}/`)
}
