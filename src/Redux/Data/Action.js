import axios from "axios";
const POSTDATA = 'POSTDATA';
const GETDETAILS = 'GETDETAILS';
const SETLOADING = 'SETLOADING';
const postData = (data)=> ({type : POSTDATA, payload : data})
const getData = (data) => ({type : GETDETAILS, payload : data});
const setLoading = (data) => ({type : SETLOADING, payload : data});
const apiCallData = (id) =>{
    return async function (dispatch){
        try {
            dispatch(setLoading(true))
            const res = await axios.get(`https://dog-house-server.herokuapp.com/data/${id}`)
            console.log(res)
            dispatch(getData(res.data))

        }
        catch (err) {
            console.log(err);
        }
    }
}
const apiCallPost = (data) =>{
    return async function (dispatch){
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`https://dog-house-server.herokuapp.com/data/post`, data)
            console.log(res)
            dispatch(postData(res.data))
        }
        catch (err) {
            console.log(err);
        }
    }
}
export {
    getData, GETDETAILS,
    apiCallData,
    SETLOADING, 
    apiCallPost, postData, POSTDATA
}