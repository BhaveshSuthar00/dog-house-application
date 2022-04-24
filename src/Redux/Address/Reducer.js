import { GETADDRESS } from './Action'
const initialState = {
    address : [],
}
export const addressReducer = (store = initialState, {type , payload})=>{
    switch (type) {
        case GETADDRESS : 
            return {...store, address : payload}
        default :
            return store
    }
}