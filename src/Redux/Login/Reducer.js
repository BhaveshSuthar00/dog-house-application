import {LOGGED } from './Action'
const dataUser = JSON.parse(localStorage.getItem('userData')) || [];
const initialState = {
    loggedIn: false,
    loginData : dataUser.user || {},
    token : dataUser.token || '',
}
export const loginReducer = (store = initialState, {type, payload})=>{
    switch (type) {
        case LOGGED : 
        return {...store, loginData : payload.data, token : payload.token, loggedIn : true}
        default:
            return store
    }
}