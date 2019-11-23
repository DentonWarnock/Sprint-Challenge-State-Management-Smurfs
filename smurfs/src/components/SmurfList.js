import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getSmurfs} from '../actions';

const SmurfList = props => {
    console.log("SmurfList.js, props: ", props);
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <>
        <div className="container">
            {/* {props.error && <div>{props.error}</div>}

            {props.isLoading ? 
                <div className="loading">loading data...</div> 
                : */}
                {props.smurfs.length ? (
                    <div className="list">
                         {props.smurfs.map(smurf => (
                            <div className="list-item" key={smurf.id}>
                                {smurf.name} - {smurf.age} year old - {smurf.height}cm tall
                                {/* <button onClick={props.removeSmurf(smurf.id)}>X</button> */}
                            </div>
                            ))
                        }
                    </div>
                )  
                :
                <p>We need to add some more Smurfs!</p>
            }            
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }    
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);