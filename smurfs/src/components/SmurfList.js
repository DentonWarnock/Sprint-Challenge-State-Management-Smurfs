import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { getSmurfs } from '../actions';

const SmurfList = props => {
    console.log("SmurfList.js, props: ", props);
    useEffect(() => {
        props.getSmurfs();
    }, [])

    return (
        <>
            {props.smurfs.length ? (
                <div className="smurf-list">
                {props.smurfs.map(smurf => {
                return <div key={smurf.id}>{smurf.name} - {smurf.age} - {smurf.height}</div>
            })}
            </div>
            ) :
            <p>We need to add some more Smurfs!</p>
        }            
        </>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }    
}

export default connect(mapStateToProps, { getSmurfs })(SmurfList);