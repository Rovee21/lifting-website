import React from 'react';

//takes a lift and displays the exersice, weight and reps
const LiftItem = ({lift}) => {
    return (
        <div>
            <h3>{lift.exercise}</h3>
            <p>Weight: {lift.weight}</p>
            <p>Reps: {lift.reps}</p>
        </div>
    );
};


export default LiftItem;