const GETPAT = 'GETPAT';
const getPat = (data) => ({type : GETPAT, payload : data});

const apiCallPat = (value) =>{
    return async function (dispatch){
        try {
            dispatch(getPat(value))
        }
        catch (err) {
            console.log(err);
        }
    }
}
export {
    getPat, GETPAT,
    apiCallPat
}