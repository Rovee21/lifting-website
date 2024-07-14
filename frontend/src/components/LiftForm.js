import React, { useState } from 'react';
import api from '../api';

const LiftForm = ({ onAddLift }) => {
    //setting exercise weight and reps to an empty string and 
    const [exercise, setExercise] = useState('');
    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            //sends a post request and converts the weight and reps from a string to an integer
            const response = await api.post('/lifts', { exercise, weight: Number(weight), reps: Number(reps) });
            //adds the new data to a new lift
            onAddLift(response.data);
            //clear the form inputs
            setExercise('');
            setWeight('');
            setReps('');
        }
        catch (err) {
            console.error('Error adding lift:', err);
          }
    };
    return (
        //handleSubmit function is called when form is submitted
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                //text shown before the user enters anything
                placeholder="Exercise"
                //value of the input is controlled by the exercise variable
                value={exercise}
                //updates the exercise variable when the input field value changes
                onChange={(e) => setExercise(e.target.value)}
                required
            />
            <input
                type="number"
                //text shown before the user enters anything
                placeholder="Weight"
                //value of the input is controlled by the exercise variable
                value={weight}
                //updates the exercise variable when the input field value changes
                onChange={(e) => setWeight(e.target.value)}
                required
            />
            <input
                type="number"
                //text shown before the user enters anything
                placeholder="Reps"
                //value of the input is controlled by the exercise variable
                value={reps}
                //updates the exercise variable when the input field value changes
                onChange={(e) => setReps(e.target.value)}
                required
            />
            <button type="submit">Add Lift</button>

        </form>
    );

};

//so it can be used in other parts of the application
export default LiftForm;