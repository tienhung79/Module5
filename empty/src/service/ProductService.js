import axios from "axios";


export const getAll = async () => {
    try {
        const result = await axios.get("http://localhost:8080/productList?")
        return result.data
    } catch (error) {
        console.log('error')
    }
}
export const create = async (product) => {
    try {
        await axios.post("http://localhost:8080/create", product)
    } catch (error) {
        console.log('error')
    }
}
export const findProduct = async (id, name) => {
    try {
        const result = await axios.get(`http://localhost:8080/productList?nameOfProduct_like=${name}&categoryOfProduct=${id}&_sort=nameOfProduct&_order=asc`)
        return result.data
    } catch (error) {
        console.log('error')
    }
}
export const deleteProduct = async (id)=>{
    try {
        await axios.delete(`http://localhost:8080/delete/${id}`)
    }catch (error) {
        console.log('error')
    }
}