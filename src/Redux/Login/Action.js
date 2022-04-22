import axios from "axios";

const LOGGED = 'LOGGED'; 
const userLog = (value) => ({type : LOGGED, payload : value})

const apiCallLoggedIn = (data) =>{
    return async function(dispatch){
        try {
            let data2 = await axios.post('https://sunday-server.herokuapp.com/user/login', data);
            localStorage.setItem('userData', JSON.stringify(data2.data))
            dispatch(userLog(data2.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}
export {
    LOGGED, userLog, apiCallLoggedIn
}