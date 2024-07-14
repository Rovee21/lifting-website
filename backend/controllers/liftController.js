//importing the lift model
const Lift = require('../models/Lift');

//handles GET request by getting all the lifts from the database
const getLifts = async (req, res) => {
    try {
      //retrieves all the documents from the lift collection
      const lifts = await Lift.find();
      //list of lifts in JSON format
      res.json(lifts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// handles POST requests by posting a new lift to the database
const addLift = async (req, res) => {
    //taking exercise weight and reps from the request body
    const { exercise, weight, reps } = req.body;
    try {
      //creating a new instance of the lift model
      const newLift = new Lift({ exercise, weight, reps });
      //saves lift in the database
      await newLift.save();
      res.status(201).json(newLift);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


//export function so the functions can be used in other parts of the application
module.exports = { getLifts, addLift };