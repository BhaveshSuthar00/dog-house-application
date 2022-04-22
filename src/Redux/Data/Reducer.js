import {GETPAT} from './Action'
const initialState = {
    patHouse : {}
}
export const dataReducer = (store = initialState, {type, payload}) =>{
    switch(type){
        case GETPAT:
        return store
        default:
            return store
    }
}