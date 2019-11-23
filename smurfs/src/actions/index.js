import axios from "axios";

export const SMURF_LOAD_START = "KANYE_LOAD_START"; 
export const SMURF_LOAD_SUCCESS = "KANYE_LOAD_SUCCESS"; 
export const SMURF_LOAD_FAILURE = "KANYE_LOAD_FAILURE"; 

export const getSmurfs = () => dispatch => {
    console.log("actions, dispatch: ", dispatch);
    dispatch({ type: SMURF_LOAD_START});
        axios
            .get("http://localhost:3333/smurfs")
            .then(res =>                 
                dispatch({ 
                    type: SMURF_LOAD_SUCCESS,
                    payload: res
                })
            )
            .catch(error => {
                console.log(error);
                dispatch({
                    type: SMURF_LOAD_FAILURE,
                    payload: error
                })
            }
        );
    }   
