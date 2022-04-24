import {GETDETAILS, SETLOADING} from './Action'
const initialState = {
    addressDetails : {},
    loading : false
}
export const dataReducer = (store = initialState, {type, payload}) =>{
    switch(type){
        case SETLOADING : 
            return {...store, loading : payload}
        case GETDETAILS:
        return {...store, addressDetails : payload, loading : false}
        default:
            return store
    }
}