import request from '../http-common'
export const getAll =  ()=>{
    return request.get('/userList')
}
