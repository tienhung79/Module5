import axios from "axios";

export const getAll= async () => {
    try {
        const result = await axios.get('http://localhost:8080/houseList')
        return result.data
    }catch (err) {
        console.log('error')
    }
}
export const creat = async (house) =>{
    try {
        await axios.post('http://localhost:8080/houseList',house)
    }catch (error) {
        console.log('error')
    }
}
export const getById = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/houseList/${id}`)
        return result.data
    }catch (error) {
        console.log('error')
    }
}