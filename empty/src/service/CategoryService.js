import axios from "axios";

export const getAll = async () =>{
    try {
        const result = await axios.get("http://localhost:8080/categoryList")
        return result.data
    }catch (error) {
        console.log('error')
    }
}