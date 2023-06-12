import {GET_ALL_USER} from "../action/Type";

const initialState = []
export const userReducer = (users = initialState,action) =>{
    const {type,payload} = action
    switch (type) {
        case GET_ALL_USER:
            return payload
        default:
            return users
    }
}