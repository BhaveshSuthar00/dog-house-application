import {LOGGED } from './Action'
const initialState = {
    loggedIn: false,
    loginData : {},
}
export const loginReducer = (store = initialState, {type, payload})=>{
    switch (type) {
        case LOGGED :
            return store
        default:
            return store
    }
}