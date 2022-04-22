import {LOGGED, ERROR } from './Action'
const dataUser = JSON.parse(localStorage.getItem('userData')) || [];
const initialState = {
    loggedIn: false,
    loginData : dataUser.user || {},
    token : dataUser.token || '',
    status : true,
    error : false
}
export const loginReducer = (store = initialState, {type, payload})=>{
    switch (type) {
        case LOGGED : 
        return {...store, status : false,error : false, loginData : payload.data, token : payload.token, loggedIn : true}
        case ERROR : 
        return {...store , loggedIn : false, error  : true, status : true}
        default:
            return store;
    }
}