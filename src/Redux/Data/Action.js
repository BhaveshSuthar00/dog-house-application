import axios from "axios";

const GETDETAILS = 'GETDETAILS';
const SETLOADING = 'SETLOADING';
const getData = (data) => ({type : GETDETAILS, payload : data});
const setLoading = (data) => ({type : SETLOADING, payload : data});

const apiCallData = (id) =>{
    return async function (dispatch){
        try {
            dispatch(setLoading(true))
            const res = await axios.get(`https://dog-house-server.herokuapp.com/data/${id}`)
            dispatch(getData(res.data))
        }
        catch (err) {
            console.log(err);
        }
    }
}
export {
    getData, GETDETAILS,
    apiCallData,
    SETLOADING
}