import {LOGGED, ERROR ,LOGOUT} from './Action'
const dataUser = JSON.parse(localStorage.getItem('userData')) || {};
const initialState = {
    loggedIn: dataUser.token !== '' ? true : false || false,
    loginData : dataUser.user || {},
    token : dataUser.token || '',
    status :    dataUser.token !== '' ? true : false  || true,
    auth : 'Permission denied',
    error : false
}
// Permission denied
// admin => Permission granted for all
// house-holder => Permission granted for add house
// user => Permission granted to add pet
export const loginReducer = (store = initialState, {type, payload})=>{
    switch (type) {
        case LOGOUT : 
            return {...store, loggedIn: false, loginData : {}, token : "", status : false, auth : 'Permission denied' }
        case LOGGED : 
        return {...store, status : false,error : false, loginData : payload.user, token : payload.token, auth : payload.authorize, loggedIn : true}
        case ERROR : 
        return {...store , loggedIn : false, error  : true, status : true}
        default:
            return store;
    }
}