import axios from "axios";

export const SMURF_LOAD_START = "KANYE_LOAD_START"; 
export const SMURF_LOAD_SUCCESS = "KANYE_LOAD_SUCCESS"; 
export const SMURF_LOAD_FAILURE = "KANYE_LOAD_FAILURE"; 

export const getSmurfs = () => dispatch => {
    console.log("actions, getSmurfts, dispatch: ", dispatch);
    dispatch({ type: SMURF_LOAD_START});
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {  
                console.log("res.data", res.data);                        
                dispatch({ 
                    type: SMURF_LOAD_SUCCESS,
                    payload: res.data
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: SMURF_LOAD_FAILURE,
                    payload: error
                })
            }
        );
    }   

    export const addNewSmurf = () => dispatch => {
        console.log("actions, addNewSmuf, dispatch : ")
    }