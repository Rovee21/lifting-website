import React from 'react';
import LiftItem from './LiftItem';

//takes an array of lists and displays the item details of each lift
const LiftList = ({ lifts }) => {
    return (
      <div>
        {lifts.map((lift) => (
          <LiftItem key={lift._id} lift={lift} />
        ))}
      </div>
    );
  };

  export default LiftList;