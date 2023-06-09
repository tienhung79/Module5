import axios from "axios";

export const save = async (todo)=>{
     try{
         await axios.post('http://localhost:8080/todoList',todo)
     }catch (error) {
         console.log('error')
     }
}
export const display = async () =>{
    try{
        const result = await axios.get('http://localhost:8080/todoList')
        return result.data
    }catch (error) {
        console.log('error')
    }
}