import { SMURF_LOAD_START, SMURF_LOAD_FAILURE, SMURF_LOAD_SUCCESS } from '../actions';
import { SMURF_ADD_START, SMURF_ADD_FAILURE, SMURF_ADD_SUCCESS } from '../actions';
// import { SMURF_REMOVE_START, SMURF_REMOVE_FAILURE, SMURF_REMOVE_SUCCESS } from '../actions';

const initialState = {
    isLoading: false,
    error: "",
    smurfs: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SMURF_LOAD_START:
            return {
                ...state,
                isLoading: true
            }
        case SMURF_LOAD_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
            }
        case SMURF_LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case SMURF_ADD_START: 
            return {
                ...state,
                isLoading: true,
            }
        case SMURF_ADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ''
            }
        case SMURF_ADD_FAILURE: 
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        // case SMURF_REMOVE_START:
        //     return {
        //         ...state,
        //         isLoading: true                
        //     }
        // case SMURF_REMOVE_SUCCESS: 
        //     return {
        //         ...state,
        //         isLoading: false,
        //         smurfs: action.payload,
        //     }
        // case SMURF_REMOVE_FAILURE:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: action.payload
        //     }
        default:
            return state;
    }
};

export default reducer;