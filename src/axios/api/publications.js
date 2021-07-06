import { axios } from '../request'

export const requestInfo = ()=>{
    return axios.get('/publication')
}

export const addPublication = (data)=>{
    return axios.post('/publication/',data)
}

export const editPublication = (data,id)=>{
    return axios.put(`/publication/${id}/`,data)
}

export const deletePublication = (id)=>{
    return axios.delete(`/publication/${id}/`)
}
