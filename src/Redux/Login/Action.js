import axios from "axios";

const LOGGED = 'LOGGED'; 
const userLog = (value) => ({type : LOGGED, payload : value})

const apiCAllLoggedIn = (data) =>{
    return async function(dispatch){
        try {}
        catch (err) {}
    }
}
export {
    LOGGED, userLog, apiCAllLoggedIn
}