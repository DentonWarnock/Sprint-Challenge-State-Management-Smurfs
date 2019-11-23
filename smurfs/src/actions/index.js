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

export const SMURF_ADD_START = "KANYE_ADD_START"; 
export const SMURF_ADD_SUCCESS = "KANYE_ADD_SUCCESS"; 
export const SMURF_ADD_FAILURE = "KANYE_ADD_FAILURE"; 

export const addNewSmurf = value => dispatch => {
    console.log("actions, addNewSmuf, dispatch : ")
    dispatch({ type: SMURF_ADD_START});
        axios
            .post("http://localhost:3333/smurfs", {
                name: value.name,
                age: value.age,
                height: value.height,
                // id: Date.now()
            })
            .then(res => {
                console.log("Actions, POST RES: ", res.data);
                dispatch({
                    type: SMURF_ADD_SUCCESS, payload: res.data
                })
            })
            .catch(err => {
                console.log("Actions, POST ERROR: ", err);
                dispatch({
                    type: SMURF_ADD_FAILURE, payload: err
                })
            })
    }