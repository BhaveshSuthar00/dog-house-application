import axios from 'axios';
const UPLOADPET = "UPLOADPET";
const uploadPet = (data)=>({type : UPLOADPET, payload : data}); 
const apiCallPet = (data)=>{
    return async (dispatch)=>{
        try {
            const postData = await axios.post("https://dog-house-server.herokuapp.com/pet/post",data);
            dispatch(uploadPet(postData))
        }
        catch (err) {
            console.log(err)
        }
    }
}
export {
    UPLOADPET, uploadPet, apiCallPet
}