import { axios } from '../request'

export const requestInfo = (data)=>{
    return axios.get('/news',{params:{...data}})
}

export const addNews = (data)=>{
    return axios.post('/news/',data)
}

export const deleteNews = (id)=>{
    return axios.delete(`/news/${id}/`)
}

export const updateNews = (data)=>{
    return axios.put(`/news/${data.id}/`,data)
}

export const latestNews = (count)=>{
    return axios.get(`/news/getNewsByCount`,{
        params:{
            count,
        }
    })
}
