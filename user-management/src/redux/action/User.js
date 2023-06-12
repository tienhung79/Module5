import * as service from '../../service/UserService'
import {GET_ALL_USER} from "./Type";
export const getAllUser = () => async (dispatch) => {
    try {
        const result = await service.getAll();
        dispatch({
            type: GET_ALL_USER,
            payload: result.data
        })

    }catch (err) {
        console.log('error')
    }
}