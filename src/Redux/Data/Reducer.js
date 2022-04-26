import {GETDETAILS, SETLOADING, POSTDATA, ACCEPTREQ} from './Action'
const initialState = {
    addressDetails : {},
    loading : false,
    currentData : {},
    acceptedPet : {},
}
export const dataReducer = (store = initialState, {type, payload}) =>{
    switch(type){
        case ACCEPTREQ : 
            return {...store,acceptedPet : payload, loading : false }
        case POSTDATA :
            return {...store, currentData : payload}
        case SETLOADING : 
            return {...store, loading : payload}
        case GETDETAILS:
        return {...store, addressDetails : payload, loading : false}
        default:
            return store
    }
}