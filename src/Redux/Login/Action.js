import axios from "axios";

const LOGGED = 'LOGGED'; 
const ERROR = 'ERROR';
const userLog = (value) => ({type : LOGGED, payload : value})
const error = ()=>({type : ERROR})
const apiCallLoggedIn = (data) =>{
    return async function(dispatch){
        try {
            let data2 = await axios.post('https://sunday-server.herokuapp.com/user/login', data);
            if(data2.data){
                localStorage.setItem('userData', JSON.stringify(data2.data))
                dispatch(userLog(data2.data))
            } else {
                dispatch(error())
            }
        }
        catch (err) {
                dispatch(error())
        }
    }
}
export {
    LOGGED, userLog, apiCallLoggedIn,
    ERROR, error
}