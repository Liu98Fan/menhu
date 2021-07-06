import { axios } from '../request'

export const requestLabPhoto = ()=>{
    return axios.get('/photo/lab')
}
export const requestGroupPhoto = ()=>{
    return axios.get('/photo/group')
}

export const requestPhotos = ()=>{
    return axios.get('/photo')
}
export const addPhoto = (data)=>{
    return axios.post('/photo/',data)
}
export const deletePhoto = (id)=>{
    return axios.delete(`/photo/${id}/`)
}
