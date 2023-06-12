import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducer/Index";

const initialState = {}
const middleware = [thunk]
export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)
