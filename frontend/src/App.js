import React, { useEffect, useState } from 'react';
import LiftForm from './components/LiftForm';
import LiftList from './components/LiftList';
import api from './api';

const App = () => {
    //setting the lifts to an empty array
    const [lifts, setLifts] = useState([]);
    const fetchLifts = async () => {
        try {
          //get request for the lifts
          const response = await api.get('/lifts');
          //update the lifts based on the responce
          setLifts(response.data);
        } catch (err) {
          console.error('Error fetching lifts:', err);
        }
    };
    //calls the fetchLifts function when the component mounts
    useEffect(() => {
        fetchLifts();
      }, []);
      const handleAddLift = (newLift) => {
        //creates a new array that adds the data from the new lift
        setLifts([...lifts, newLift]);
      };
      return (
        <div>
          <h1>Lifting Tracker</h1>
          <LiftForm onAddLift={handleAddLift} />
          <LiftList lifts={lifts} />
        </div>
      );
};

export default App;
