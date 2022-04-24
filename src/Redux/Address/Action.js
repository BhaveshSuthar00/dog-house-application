import axios from "axios";

const GETADDRESS  = 'GETADDRESS';
const getAddress = (data)=>({type : GETADDRESS, payload : data});
const apiCallAddress = ()=>{
    return async(dispatch)=>{
        try {
            const addressD = await axios.get('https://dog-house-server.herokuapp.com/address/all');
            dispatch(getAddress(addressD.data.Address))
        }
        catch (err) {
            console.log(err);
        }
    }
}
const apiCallPrice = (value)=>{
    return async(dispatch)=>{
        try {
            if(value === 'both'){
                const addressD = await axios.get('https://dog-house-server.herokuapp.com/address/all');
                dispatch(getAddress(addressD.data.Address))
            }
            else if(value !== 'both'){
                const price  = await axios.get(`https://dog-house-server.herokuapp.com/address/sort?sortby=${value}`);
                dispatch(getAddress(price.data.Address))
            }
        }
        catch (err) {

        }
    }
} 
const apiCallVerified = (value)=>{
    return async(dispatch)=>{
        try {
            if(value === 'both') {
                const addressD = await axios.get('https://dog-house-server.herokuapp.com/address/all');
                dispatch(getAddress(addressD.data.Address))
            }
            else if(value !== 'both'){
                const price  = await axios.get(`https://dog-house-server.herokuapp.com/address/sort?sortby=${value}`);
                dispatch(getAddress(price.data.Address))
            }
        }
        catch (err) {
            
        }
    }
} 
export {
    GETADDRESS, getAddress, apiCallAddress,
    apiCallPrice, apiCallVerified
}