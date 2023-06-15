import axios from "axios";

export const getAll= async () => {
    try {
        const result = await axios.get('http://localhost:8080/roomList')
        return result.data
    }catch (err) {
        console.log('error')
    }
}
export const creat = async (room) =>{
    try {
        await axios.post('http://localhost:8080/roomList',room)
    }catch (error) {
        console.log('error')
    }
}
export const getById = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/roomList/${id}`)
        return result.data
    }catch (error) {
        console.log('error')
    }
}
export const update = async (id,room) =>{
    try {
        await axios.put(`http://localhost:8080/roomList/${id}`,room)
    }catch (error) {
        console.log('error')
    }
}
export const deleteRoom = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/roomList/${id}`)
    }catch (error) {
        console.log('error')
    }
}