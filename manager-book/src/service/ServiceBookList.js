import axios from "axios";

export const getAll = async () =>{
try {
        const result = await axios.get('http://localhost:8080/bookList')
        return result.data
}catch (error) {
    console.log('error')
}
}
export const save = async (book) => {
    try{
        await axios.post('http://localhost:8080/bookList',book)
    }catch (erroer) {
        console.log('error')
    }
}
export const getById = async (id) =>{
    try {
       const result = await axios.get(`http://localhost:8080/bookList/${id}`)
        return  result.data
    }catch (error) {
        console.log('error')
    }
}
export const update = async (book,id) => {
    try {
        await axios.put(`http://localhost:8080/bookList/${id}`, book)
    } catch (error) {
        console.log(error);
        return error
    }
}
 export const deleteBook = async (book, idBook) => {
    try {
        const res = await axios.delete(`http://localhost:8080/bookList/${idBook}`, book)
        return res.data;
    } catch(error){
        console.error("loi hien thi");
    }
}
