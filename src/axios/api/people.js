import { axios } from '../request'

export const requestInfo = ()=>{
    return axios.get('/member')
}

export const addPeople = (data)=>{
    return axios.post('/member/',data)
}

export const deletePeople = (id)=>{
    return axios.delete(`/member/${id}/`)
}

export const editPeople = (data,id)=>{
    return axios.put(`/member/${id}/`,data)
}

export const listMember = ()=>{
    return axios.get('/member')
}
