import axios from "axios";

export const getAll = async () =>{
    try{
        const result = await axios.get('http://localhost:8080/productList?_sort=priceOfProduct&_order=desc')
        return result.data
    }catch (error) {
        console.log('error')
    }
}
export const create = async (product) =>{
    try{
        await axios.post('http://localhost:8080/productList',product)
    }catch (error) {
        console.log('error')
    }
}
export const getById = async (id) =>{
    try{
       const res = await axios.get(`http://localhost:8080/productList/${id}`)
        return res.data
    }catch (error) {
        console.log('error')
    }
}
export const update = async (id,product) =>{
    try {
        await axios.put(`http://localhost:8080/productList/${id}`,product)
    }catch (error) {
        console.log('error')

    }
}
export const deleteProduct = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/productList/${id}`)
    }catch (error) {
        console.log('error')
    }
}
export const findByName = async (name,id) => {
    try {
        return (
            (await axios.get(`http://localhost:8080/productList?nameOfProduct_like=${name}&kindOfProduct=${id}&_sort=priceOfProduct&_order=asc`)).data
        )
    } catch (error) {
        console.log(error)
    }
}
export const findByPrice= async (price) =>{
    try {
        const res = await axios.get(`http://localhost:8080/productList/?priceOfProduct=${price}`)
        return res.data
    }catch (error) {
        console.log(error)

    }
}