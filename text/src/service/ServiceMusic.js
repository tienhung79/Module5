import axios from "axios";

export const getAll = async () =>{
    try {
        const result = await axios.get('http://localhost:8080/musicList')
        return result.data
    }catch (error) {
        console.log('error')
    }
}
export const create = async (music) =>{
    try {
        await axios.post('http://localhost:8080/musicList',music)
    }catch (error) {
        console.log('error')
    }
}
export const update = async (id,music) =>{
    try {
        await axios.put(`http://localhost:8080/musicList/${id}`,music)
    }catch (error) {
        console.log('error')
    }
}
export const getById = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/musicList/${id}`)
        return result.data
    }catch (error) {
        console.log('error')
    }
}