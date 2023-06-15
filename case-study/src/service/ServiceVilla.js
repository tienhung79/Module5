import axios from "axios";

export const getAll= async () => {
try {
    const result = await axios.get('http://localhost:8080/villaList')
    return result.data
}catch (err) {
    console.log('error')
}
}
export const creat = async (villa) =>{
    try {
        await axios.post('http://localhost:8080/villaList',villa)
    }catch (error) {
        console.log('error')
    }
}
export const getById = async (id) =>{
    try {
        const result = await axios.get(`http://localhost:8080/villaList/${id}`)
        return result.data
    }catch (error) {
        console.log('error')
    }
}
export const update = async (id,villa) =>{
    try {
        await axios.put(`http://localhost:8080/villaList/${id}`,villa)
    }catch (error) {
        console.log('error')

    }
}